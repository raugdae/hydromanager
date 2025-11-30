import api from "../api/axios";

export const usePerson = () => {
  const getPersons = async () => {
    try {
      const result = await api.get(`/admin/person/getAllPerson`);
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
    try {
      const result = await api.post(`/admin/person/addPerson`, body);
      console.log(result);
      return result;
    } catch (error) {
      console.log(error, error.message);
    }
  };

  return {
    getPersons,
    getPersonDetail,
    updatePersonDetail,
    addPerson,
  };
};
