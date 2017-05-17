# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


###########################################################################
#Demo Accounts
skywalker = User.create(username: "Skywalker", email: "luke@skywalker.com", password: "password")
organa = User.create(username: "Organa", email: "leia@organa.com", password: "password")
solo = User.create(username: "Solo", email: "han@solo.com", password: "password")
antilles = User.create(username: "Antilles", email: "wedge@antilles.com", password: "password")
jade = User.create(username: "Jade", email: "mara@jade.com", password: "password")
horn = User.create(username: "Horn", email: "corran@horn.com", password: "password")
katarn = User.create(username: "Katarn", email: "kyle@katarn.com", password: "password")
kenobi = User.create(username: "Kenobi", email: "obi@kenobi.com", password: "password")
mothma = User.create(username: "Mothma", email: "mon@mothma.com", password: "password")
ackbar = User.create(username: "Ackbar", email: "admiral@ackbar.com", password: "password")
feylya = User.create(username: "Feylya", email: "borsk@feylya.com", password: "password")
isaard = User.create(username: "Isaard", email: "ysanne@isaard.com", password: "password")
isolder = User.create(username: "Isolder", email: "prince@isolder.com", password: "password")
janson = User.create(username: "Janson", email: "wes@janson.com", password: "password")
shrike = User.create(username: "Shrike", email: "garris@shrike.com", password: "password")
salsolo = User.create(username: "Sal-Solo", email: "thrackan@sal-solo.com", password: "password")
tharen = User.create(username: "Tharen", email: "brian@tharen.com", password: "password")
###########################################################################

100.times do
  User.create(username: Faker::Internet.unique.user_name, email: Faker::Internet.safe_email, password: Faker::Internet.password(7))
end

500.times do
  Question.create(title: Faker::Lorem.sentence, body: Faker::Lorem.paragraph(2), author_id: (1..117).to_a.sample)
end

1000.times do
  answer = Answer.new()
  until answer.valid?
    answer = Answer.new(body: Faker::Lorem.paragraph(2), question_id: (1..500).to_a.sample, author_id: (1..120).to_a.sample)
  end
  answer.save
end
