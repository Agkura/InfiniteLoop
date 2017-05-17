json.extract! user, :id, :username
json.userQuestions user.questions.map {|record| record.id}
