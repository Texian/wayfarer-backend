const db = require('./models');
const users = [
  {
    firstName: 'Anca',
    lastName: 'Doe',
    email: 'jdoe@gmail.com',
    password: '12345678'
  },
  {
    firstName: 'Christian',
    lastName: 'Smith',
    email: 'ksmith@gmail.com',
    password: '12345678'
  },
  {
    firstName: 'Jesus',
    lastName: 'Doe',
    email: 'jesus@gmail.com',
    password: '12345678'
  },
];
const cities = [
  {
    name: 'San Francisco',
    country: 'City by the Bay',
    image: 'https://qtxasset.com/2016-05/sanfrancisco1.jpg?d03luT2_JZoz7SlHPz83.SRgx2rFOaA5'
  },
  {
    name: 'New York',
    country: 'The Big Apple',
    image: 'https://pix10.agoda.net/geo/city/318/1_318_02.jpg?s=1920x822'
  },
  {
    name: 'Paris',
    country: 'City of Romance',
    image: 'https://www.riotgames.com/darkroom/1440/b2b587d91d3c5d2922953ac62fbb2cb8:dfd0d5c2d07f981fb8cda29623b5e54e/paris.jpg'
  },
  {
    name: 'London',
    country: 'Home of Big Ben',
    image: 'https://metro.co.uk/wp-content/uploads/2016/07/ad_212177409.jpg?quality=80&strip=all'
  },
];
const posts = [
  {
    title: 'Post One',
    body: 'This is the body for Post One.'
  },
  {

    title: 'Post Two',
    body: 'This is the body for Post Two.'
  },
  {
    title: 'Post Three',
    body: 'This is the body for Post Three.'
  },
  {
    title: 'Post Four',
    body: 'This is the body for Post Four.'
  },
];

// Delete All Cities
console.log('Deleting all cities...');
db.City.deleteMany({}, (err, result) => {
  if (err) {
    console.log(err);
    process.exit();
  }
  // console.log(result); // {n: number-of-matching-results, ok: 0 or 1, deletedCount: number-of-records-deleted}
  console.log(`Successfully deleted ${result.deletedCount} cities.`);
  // Delete All Posts
  console.log('Deleting all posts...');
  db.Post.deleteMany({}, (err, result) => {
    if (err) {
      console.log(err);
      process.exit();
    }
    console.log(`Successfully deleted ${result.deletedCount} posts.`);
// Delete All Users
    console.log('Deleting all users...');
    db.User.deleteMany({}, (err, result) => {
      if (err) {
        console.log(err);
        process.exit();
      }
      console.log(`Successfully deleted ${result.deletedCount} users.`);

        //    // Create New Posts
        //    console.log('Creating new posts...');
        //    db.Post.create(cities, (err, newPosts) => {
        //    if (err) {
        //      console.log(err);
        //      process.exit();
        //    }
        //    console.log(`Successfully created ${newPosts.length} posts.`);
      
      // Create New Cities
      console.log('Creating new cities...');
      db.City.create(cities, (err, newCities) => {
        if (err) {
          console.log(err);
          process.exit();
        }
        console.log(`Successfully created ${newCities.length} cities.`);
        

        // Create New Users
        console.log('Creating new users...');
        db.User.create(users, (err, newUsers) => {
          if (err) {
            console.log(err);
            process.exit();
          }
          console.log(`Successfully created ${newUsers.length} users.`);
          process.exit();
        
        });
      });
    });
  });
});
