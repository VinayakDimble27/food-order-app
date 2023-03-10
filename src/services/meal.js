import { GET, POST } from "./apiHelper"

export const getMeals = async () => {
try {
    const response = await GET('/Meals');
    console.log(response?.data);
    return  response.data;
    
  
} catch (error) {
  throw new Error(error)
}
};


export const postUserData = async (data) =>{ 
  try{
    console.log({data});
      const response = await POST('order',data);
      return response?.status;

  }catch(e){
    throw new Error(e);
  }
}