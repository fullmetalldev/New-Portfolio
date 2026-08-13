const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateField = (name, value) => {
  switch (name) {
    case "name":
      if (!value.trim()) return "Please enter your name.";
      if (value.trim().length < 2) return "Name must be at least 2 characters long.";
      return "";
    case "email":
      if (!value.trim()) return "Please enter your email.";
      if (!emailRegex.test(value.trim())) return "Please enter a valid email address.";
      return "";
    case "message":
      if (!value.trim()) return "Please add a short project description.";
      if (value.trim().length < 10) return "Message must be at least 10 characters long.";
      return "";
    default:
      return "";
  }
};

export const validateContactForm = (formData) => ({
  name: validateField("name", formData.name),
  email: validateField("email", formData.email),
  message: validateField("message", formData.message),
});
