import { useOnlineShop } from "../../hooks/useOnlineShop";
import { useAttendee } from "../../hooks/useAttendee";
import { useState, useEffect } from "react";
import { TicketX, TicketCheck, TicketCheckIcon } from "lucide-react";

function PlayerTicketForm({ attendeeId, firstName, lastName }) {
  const [infomaniakTicket, setInfomaniakTicket] = useState([]);
  const [attendeeTicket, setAttendeeTicket] = useState([]);
  const [ticketList, setTicketList] = useState([]);
  const [inputTicketValue, setInputTicketValue] = useState("");
  const [isTicketValid, setIsTicketValid] = useState(false);
  const [showErrorBanner, setShowErrorBanner] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [surveyData, setSurveyData] = useState([]);
  const [debouncedValue, setDebouncedValue] = useState("");
  const {
    queryInfomaniakShop,
    getAttendeeTicket,
    getUnassignedTicket,
    getSurveyFromTicket,
  } = useOnlineShop();
  const { assignTickettoPlayer } = useAttendee();
  //const [ surveyAnswers,setSurveyAnswers] = useState([]);

  useEffect(() => {
    const fetchKey = async () => {
      setIsLoading(true);
      const responseShop = await queryInfomaniakShop("70008683");
      setInfomaniakTicket(responseShop);
      const responseTicket = await getAttendeeTicket(attendeeId);
      console.log(responseTicket);
      setAttendeeTicket(responseTicket);
      const responseTicketAvailable = await getUnassignedTicket();
      setTicketList(responseTicketAvailable);
      if (responseTicket.length === 1) {
        const responseSurvey = await getSurveyFromTicket(responseTicket[0].id);
        setSurveyData(responseSurvey);
      }

      setIsLoading(false);
    };

    fetchKey();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputTicketValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [inputTicketValue]);

  useEffect(() => {
    if (debouncedValue) {
      if (
        ticketList.some((ticket) => inputTicketValue === ticket.ticket_code)
      ) {
        setIsTicketValid(true);
      } else {
        setIsTicketValid(false);
      }
    }
  }, [debouncedValue]);

  const handleAssignTicket = async (e) => {
    e.preventDefault();
    if (ticketList.some((ticket) => inputTicketValue === ticket.ticket_code)) {
      await assignTickettoPlayer(attendeeId, inputTicketValue);
      const ticket = await getAttendeeTicket(attendeeId);
      setAttendeeTicket(ticket);
      setShowErrorBanner(false);
      return;
    } else {
      setShowErrorBanner(true);
    }
  };

  const buildHeader = () => {
    if (attendeeTicket.length > 0) {
      return attendeeTicket[0].payement_state === "valid" ? (
        <div className="font-bold size-4 text-green-800 w-full text-center">
          Billet valide
        </div>
      ) : (
        <div className="font-bold size-4 text-orange-800 w-full text-center">
          Billet en attente sur Infomaniak
        </div>
      );
    } else {
      return (
        <form onSubmit={handleAssignTicket} className="flex flex-row gap-4 p-4">
          {isTicketValid ? (
            <TicketCheckIcon className="stroke-green-800" />
          ) : (
            <TicketX className="stroke-red-500" />
          )}
          <input
            name="ticketNumber"
            type="text"
            className="bg-zinc-200"
            onChange={(e) => {
              setInputTicketValue(e.target.value);
            }}
            value={inputTicketValue}
          ></input>
          <button
            type="submit"
            className="bg-zinc-400 border rounded px-2 hover:cursor-pointer hover:bg-zinc-500"
          >
            Enregistrer
          </button>
        </form>
      );
    }
  };

  if (isLoading)
    return (
      <div className="flex flex-row w-full h-full text-3xl font-bold items-center justify-center">
        Chargement des données...
      </div>
    );

  return (
    <div className="flex flex-col w-full items-center gap-4 bg-zinc-300">
      {showErrorBanner && (
        <div className="text-red-500 font-bold size-4 w-full text-center">
          Code du billet invalide
        </div>
      )}

      {buildHeader(attendeeTicket)}
      <div className="flex flex-row justify-around gap-2 ">
        <div>Prénom :</div>
        <div>{firstName}</div>
        <div>Nom :</div>
        <div>{lastName}</div>
      </div>
      {attendeeTicket.length > 0 ? (
        <div className="flex flex-col flex-1 w-full h-full items-center justify-items-center gap-2">
          <div className="font-bold text-xl">
            Données du formulaire Infomaniak :{" "}
          </div>
          {surveyData.map((item) => {
            return (
              <div className="flex flex-row w-1/2 gap-2 border-b">
                <div className="flex-1">{item.field_name}</div>
                <div className="flex-1">{item.field_value}</div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>Aucun ticket attribué</div>
      )}
    </div>
  );
}
export default PlayerTicketForm;
