const faker = require("faker");
const fs = require("fs");

faker.locale = "ko";

const generateUsers = (length) => {
  const customers = [...new Array(length)].map((_, index) => ({
    id: index + 1,
    name: faker.name.lastName() + faker.name.firstName(),
    email: faker.internet.email(),
    profile_img: `https://robohash.org/${faker.datatype.number()}?set=set2&size=180x180`,
    phone_number: faker.phone.phoneNumber(),
    created_at: new Date(),
  }));

  return customers;
};

const generate = () => {
  const users = generateUsers(100);

  const generatedData = {
    users,
  };

  fs.writeFileSync("./src/server/Database.json", JSON.stringify(generatedData, null, 2));
};

generate();
