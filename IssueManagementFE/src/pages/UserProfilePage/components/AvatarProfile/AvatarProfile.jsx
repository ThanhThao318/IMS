import { Avatar } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Input } from "reactstrap";

export const AvatarProfile = ({fullname, userImg}) => {
  return (
    <div className="px-3">
      <h3 className="text-center mb-4">{fullname}</h3>
      <Avatar
        className="mx-auto d-block mb-5"
        size={132}
        src={userImg}
        icon={userImg === undefined ? <UserOutlined /> : ''}
      />
      <Input className="w-75 mx-auto d-block" id="exampleFile" name="file" type="file" />
    </div>
  );
};
