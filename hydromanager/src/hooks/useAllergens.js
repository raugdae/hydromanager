import { BadgeAlert } from "lucide-react";
import api from "../api/axios";

export const useAllergens = () => {
  const getAllergens = async () => {
    try {
      const result = await api.get("/admin/data/getAllergenList");
      return result.data;
    } catch (error) {
      console.log(error, error.message);
    }
  };

  const getPersonAllergen = async (personid) => {
    if (personid) {
      try {
        const result = await api.get(
          `/admin/person/${personid}/getPersonAllergens`
        );

        return result.data;
      } catch (error) {
        console.log(error, error.message);
      }
    }
    return ;
  };

  const setPersonAllergen = async (personid, allergenlist) => {
    const body = { allergenlist };

    try {
      const response = await api.patch(
        `/admin/person/${personid}/updateAllergen`,
        body
      );
      return response;
    } catch (error) {
      console.log(error, error.message);
    }
  };

  return {
    getAllergens,
    getPersonAllergen,
    setPersonAllergen,
  };
};
