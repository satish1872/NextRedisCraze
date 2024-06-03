import { createClient } from "redis";

/* const client = createClient({
  password: process.env.REDIS_PW,
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
}); */

const client = createClient({
  password: "jJMDoWshOdy0yUluzHIrP1A5zqUPYJ3u",
  socket: {
    host: "redis-18430.c44.us-east-1-2.ec2.redns.redis-cloud.com",
    port: 18430,
  },
});


const onload = async () => {
  if (!client.isOpen) {
    await client.connect();
  }
};
onload();

// client.set("name", "mario");

export { client };
