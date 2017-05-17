import sample from 'lodash/sample';

let demoAccounts = [
  "Skywalker", "Organa", "Solo", "Antilles",
  "Jade", "Horn", "Katarn", "Kenobi", "Mothma",
  "Ackbar", "Feylya", "Isaard", "Isolder", "Janson",
  "Shrike", "Sal-Solo", "Tharen"
]

export const demoUser = () => {
  return ({
    username: sample(demoAccounts),
    password: "password"
  })
}
