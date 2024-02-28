const input = document.getElementById('first_name') as HTMLInputElement | null;

if (input != null) {
  const value = input.value;
  console.log(value); // 👉️ "Initial value"
}

// 👇️ using optional chaining (?.)
const value = input?.value;

console.log(value); // 👉️ Initial value