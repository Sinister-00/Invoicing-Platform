import * as bcrypt from "bcrypt";
import {JwtPayload, sign} from "jsonwebtoken";
import {APIResponse} from "../../entities/response";
import {dbSource} from "../../db";
import User from "../../entities/db/user";
import {TSignInSchema} from "../../validators/auth";

const signIn = async (
  data: TSignInSchema
): Promise<APIResponse<User>> => {
  const userRepository = dbSource.getRepository(User);
  const user = await userRepository.findOne({
    where: {username: data.username},
  });
  if (!user) {
    return {
      statusCode: 404,
      body: {success: false, message: "🤦🏻 User doesn't Exists"},
    };
  }
  const valid = await bcrypt.compare(data.password, user.password);

  if (!valid) {
    return {
      statusCode: 401,
      body: {
        success: false,
        message: "🤷🏼 Please check your email or password",
      },
    };
  }
  let userExists: any = user;
  const jwtToken = sign(
    <JwtPayload>{
      id: user.id,
    },
    process.env.JWT_SECRET!,
    {
      issuer: "Plotline",
      expiresIn: "240h",
    }
  );

  delete userExists.password;
  userExists.token = jwtToken;
  return {
    statusCode: 200,
    body: {
      success: true,
      message: "🙎 User Signed in Successfully",
      data: userExists,
    },
  };
};

export default signIn;
