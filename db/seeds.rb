100.times do

  d = Department.create(
    name: Faker::Company.name
)

10.times do 
  p = Product.create(
    name: Faker::Commerce.product_name,
    description: Faker::Lorem.sentence,
    price: Faker::Commerce.price.to_f,
    department_id: d.id
  )


  end
end 
    
    







  puts  "Seeded"
  