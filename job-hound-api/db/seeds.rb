# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
job = Job.create(
  company:"google",
  title:"backend ninja",
  date_applied: "2015-10-01 00:00:00",
  date_replied: "2015-10-02 00:00:00",
  phone_interview: "2015-10-15 00:00:00",
  notes: "What the hell is a backend ninja? Recuriter's name was Jill",
  questions: ["Do they have daycare for pets?", "Can I bring my parrot to work?", "What is your onboarding process?"]
)
