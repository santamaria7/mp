import React, { createRef } from "react";
import { Card, Details, ImageWrapper } from "../design";
import Email from "../../assets/email.png";
import Call from "../../assets/call.png";

const Member: React.FC<MemberProps> = ({ item }) => {
  const imgRef = createRef<HTMLImageElement>();
  const phoneNumber = item.offices.find((office) => office.type === "office")
    ?.tel;
  const placeHolder =
    "https://cardiffstudentmedia.co.uk/xpress/wp-content/uploads/sites/5/2016/12/person-placeholder-5.png";
  const onError = () => {
    if (imgRef.current) imgRef.current.src = placeHolder;
  };
  return (
    <Card>
      <Details>
        <strong>{item.name}</strong>
        <p><strong>Riding: </strong>{item.district_name}</p>
        <p><strong>party: </strong>{item.party_name}</p>
        <p>
          <a
            href={`mailto:${item.email}`}
            title={`Email ${item.name}`}
            aria-label={`Email ${item.name}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={Email} alt="email" width={26} />
          </a>
          {phoneNumber ? (
            <a
              href={`tel:+${phoneNumber.replace(/\s/g, "")}`}
              title={`Call ${item.name}`}
              aria-label={`Call ${item.name}`}
            >
              <img src={Call} alt="call" width={22} />
            </a>
          ) : (
            ""
          )}
        </p>
      </Details>
      <ImageWrapper>
        <img
          src={item.photo_url}
          alt={`${item.name}`}
          onError={onError}
          ref={imgRef}
        />
      </ImageWrapper>
    </Card>
  );
};

export default Member;
