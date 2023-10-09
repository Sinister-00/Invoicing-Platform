import * as bcrypt from "bcrypt";
import {APIResponse} from "../../entities/response";
import User from "../../entities/db/user";
import {dbSource} from "../../db";
import {TSignupSchema} from "../../validators/auth";

const signUp = async (
  data: TSignupSchema
): Promise<APIResponse<User>> => {
  /* Create a new user */
  const userRepository = dbSource.getRepository(User);
  const user = await userRepository.findOne({
    where: [{email: data.email}, {username: data.username}],
  });
  if (user) {
    return {
      statusCode: 403,
      body: {success: false, message: "🤵 User Already Exists"},
    };
  }

  const saltRounds = 8;
  const hash = await bcrypt.hash(data.password, saltRounds);
  data.password = hash;
  const createdUser = await userRepository.save(data);
  return {
    statusCode: 201,
    body: {
      success: true,
      message: "🙎 User Registered Successfully",
      data: createdUser,
    },
  };
};

export default signUp;
