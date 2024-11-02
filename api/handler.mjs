export async function handler() {
  return {
    body: JSON.stringify({ message: "Hello from Lambda2 🎉" }),
    statusCode: 200,
  };
}