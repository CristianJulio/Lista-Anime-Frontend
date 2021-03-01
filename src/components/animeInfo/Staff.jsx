import React from "react";
import {
  StaffContainer,
  TitleStaff,
  ItemsContainer,
  ItemStaff,
  ImgStaff,
  TextContainerStaff,
  NameStaffMember,
  RoleStaffMember
} from "../../styles/animeInfoStyles/StaffStyledComp";

const Staff = ({ data }) => {
  return (
    <StaffContainer>
      <TitleStaff>Staff</TitleStaff>
      <ItemsContainer>
        {data.map((d) => (
          <ItemStaff key={d.id}>
            <ImgStaff src={d.staff.image_url} alt="" />
            <TextContainerStaff>
              <NameStaffMember>{d.staff.name}</NameStaffMember>
              <RoleStaffMember>{d.staff.positions[0]}</RoleStaffMember>
            </TextContainerStaff>
          </ItemStaff>
        ))}
      </ItemsContainer>
    </StaffContainer>
  );
};

export default Staff;
