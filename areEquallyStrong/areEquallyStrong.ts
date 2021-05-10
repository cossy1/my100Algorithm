function areEquallyStrong(
  yourLeft: number,
  yourRight: number,
  friendsLeft: number,
  friendsRight: number
): boolean {
  const yourWestest = yourLeft <= yourRight ? yourLeft : yourRight;
  const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
  const friendWeakest =
    friendsLeft <= friendsRight ? friendsLeft : friendsRight;
  const friendStrongest =
    friendsLeft >= friendsRight ? friendsLeft : friendsRight;

  return yourWestest === friendWeakest && yourStrongest === friendStrongest;
}

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
