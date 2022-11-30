export const login = async (data:any) => {
  return await fetch(`/api/login?name=${data.name}&email=${data.email}$gender=${data.gender}`) 
}