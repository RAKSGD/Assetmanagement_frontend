import UserSerivce from "./UserService";

let User = {
  userId: 49,

  userPassword: "raks",

  userName: "Rakshath",

  role: "Administrator",
};

test("Testing login user funciton.", async () => {
  let service = new UserSerivce();

  await service.loginService(User).then((result) => {
    let user = result.data;

    expect(user).toBe("Administrator");
  });
});
test("Testing find user by id funciton.", async () => {
  let service = new UserSerivce();

  await service.findUserById(49).then((result) => {
    let user = result.data;

    expect(user.userName).toBe("Rakshath");
  });
});
test("Testing view all user funciton.", async () => {
  let service = new UserSerivce();

  await service.viewUser().then((result) => {
    let user = result.data;

    expect(user).toBe(user);
  });
});

test("Testing update user funciton.", async () => {
  let service = new UserSerivce();

  await service.updateUser(User).then((result) => {
    let user = result.data;

    expect(user).toBe("user is updated successfully");
  });
});
