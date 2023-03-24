# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts('Destroying Tdlist DB!')
puts('cleaning up...')
Tdlist.destroy_all

puts('adding new entries...')

Tdlist.create(title: 'Schedule meetings: IT, Accounts, HR', completed: false)
Tdlist.create(title: "Visit children's home: perform duties", completed: false)

puts('Go check out http://localhost:3000/api/version1/tdlists for JSON formatted objects!')
