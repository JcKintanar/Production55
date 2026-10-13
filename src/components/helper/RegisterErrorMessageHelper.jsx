export default function getErrorMessage(code) {
  switch (code) {
    case "auth/email-already-in-use":
      return "An account with this email already exists.";
    case "auth/weak-password":
      return "Password must be at least 6 characters.";
    case "auth/invalid-email":
      return "Please enter a valid email.";
    case "auth/operation-not-allowed":
      return "Email sign-up is not enabled for this project.";
  }
}
