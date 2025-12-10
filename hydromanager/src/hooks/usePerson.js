import api from "../api/axios";

export const usePerson = () => {
  const getPersons = async (setLoading) => {
    try {
      setLoading(true);
      const result = await api.get(`/admin/person/getAllPerson`);
      setLoading(false);
      return result.data;
    } catch (error) {
      console.log(error, error.message);
    }
  };
  const getPersonDetail = async (id) => {
    if (id) {
      try {
        if (id) {
          const result = await api.get(`/admin/person/${id}/getPersonDetail`);
          return result.data;
        }
        return null;
      } catch (error) {
        console.log(error, error.message);
      }
    }
  };
  const updatePersonDetail = async (personid, data) => {
    const body = data;
    try {
      const result = await api.patch(
        `/admin/person/${personid}/updateProfile`,
        body
      );
      return result;
    } catch (error) {
      console.log(error, error.message);
    }
  };

  const addPerson = async (data) => {
    const body = data;
    console.log(body);
    try {
      const result = await api.post(`/admin/person/addPerson`, body);
      return result.data.addedPerson.id;
    } catch (error) {
      console.log(error, error.message);
    }
  };

  const deletePerson = async (data) => {
    const personid = data.id;
    try {
      const result = await api.delete(`/admin/person/${personid}/deletePerson`)
      return result;
    }catch (error){
      console.log(error.error.message)
    }

  }

  return {
    getPersons,
    getPersonDetail,
    updatePersonDetail,
    addPerson,
    deletePerson
  };
};
