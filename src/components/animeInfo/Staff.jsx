import React from "react";
import {
  StaffContainer,
  TitleStaff,
  StaffItemsContainer,
  ItemStaff,
  ImgStaff,
  TextContainerStaff,
  NameStaffMember,
  RoleStaffMember
} from "../../styles/animeInfoStyles/StaffStyledComp";

const Staff = ({ data }) => {

  if(!data) return null;
  return (
    <StaffContainer>
      <TitleStaff>Staff</TitleStaff>
      <StaffItemsContainer>
        {data.map((d) => (
          <ItemStaff key={d.item.name}>
            <ImgStaff src={d.item.image_url} alt="" />
            <TextContainerStaff>
              <NameStaffMember>{d.item.name}</NameStaffMember>
              <RoleStaffMember>{d.item.positions[0]}</RoleStaffMember>
            </TextContainerStaff>
          </ItemStaff>
        ))}
      </StaffItemsContainer>
    </StaffContainer>
  );
};

export default Staff;
