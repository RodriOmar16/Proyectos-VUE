import axios from 'axios';
import { ref } from 'vue';

export const useGetData = () => {
  //data
  const data    = ref(null);
  const loading = ref(true);
  const errorMsj   = ref(null);

  const getData = async (url) => {
    try {
      loading.value = true;
      const res     = await axios.get(url);
      data.value    = res.data;
    } catch (error) {
      errorMsj.value   = "Ocurrió un error al intentar obtener los datos: "+error.message 
    } finally{
      loading.value = false;
    }
  };

  return {
    getData,
    data, loading, errorMsj 
  }
}