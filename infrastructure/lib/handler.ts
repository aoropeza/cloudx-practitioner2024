export async function main() {
    return {
      body: JSON.stringify({ message: "Hello from Lambda 3 🎉" }),
      statusCode: 200,
    };
  }
  