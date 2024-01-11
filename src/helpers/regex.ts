export const RegexValidator = {
  email:
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  password: /^.*(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).*$/,
};

// const regexPassword = /^.*(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).*$/;
// const validPasswordMessage =
//   'Tối thiểu 6 ký tự.\n Ít nhất 1 chữ in hoa, 1 chữ số và 1 ký tự đặc biệt';
// const newPasswordMessage = 'Mật khẩu mới không được trùng mật khẩu cũ';
