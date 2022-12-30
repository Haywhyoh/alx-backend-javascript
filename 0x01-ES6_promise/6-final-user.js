import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([user, photo]).then((results) => {
    const resultList = [];
    results.forEach((result) => {
      if (result.status === 'fulfilled') {
        resultList.push({ status: result.status, value: result.value });
      } else {
        resultList.push({ status: result.status, value: `Error : ${result.reason.message}` });
      }
    });
    return resultList;
  });
}
