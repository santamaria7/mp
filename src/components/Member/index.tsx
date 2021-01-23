import React from "react";
import { Card } from "../design";

const Member: React.FC<MemberProps> = ({ item }) => {
  return (
    <Card>
        <div>
            <strong>{item.name}</strong>
            <p>Riding: {item.district_name}</p>
            <p>party: {item.party_name}</p>
        </div>
        <div>
            <img src={item.photo_url} alt={`${item.name}`} />
        </div>

    </Card>
  );
};

export default Member;
