export const generateRandomAvatar = g => {
  const gender = g === 'male' ? 'men' : 'women';
  const randomNumber = Math.floor(Math.random() * 50);

  return `https://randomuser.me/api/portraits/${gender}/${randomNumber}.jpg`;
};
