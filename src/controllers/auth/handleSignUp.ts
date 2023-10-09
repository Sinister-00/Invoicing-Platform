import * as bcrypt from "bcrypt";
import {dbSource} from "../../db";
import User from "../../entities/db/user";
import {TSignupSchema} from "../../validators/auth";
import {APIResponse} from "../../entities/response";

const handleSignUp = async (
  data: TSignupSchema
): Promise<APIResponse<User>> => {
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

  const saltRounds = 10;
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

export default handleSignUp