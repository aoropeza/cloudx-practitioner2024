export async function main() {
  return {
    body: JSON.stringify({ message: "Hello from Lambda3 🎉" }),
    statusCode: 200,
  };
}