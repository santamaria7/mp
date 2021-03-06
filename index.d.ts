type Boundary = {
  boundary_set_name: string;
  external_id: string;
  name: string;
  related: {
    boundary_set_url: string;
  };
  boundary_set_url: string;
  url: string;
};
type Representative = {
  district_name: string;
  elected_office: string;
  email: string;
  extra: {
    constituency_email?: string;
  };
  first_name: string;
  gender: string;
  last_name: string;
  name: string;
  offices: {
    type?: string;
    fax?: string;
    tel?: string;
  }[];
  party_name: string;
  personal_url: string;
  photo_url: string;
  related: {
    boundary_url: string;
    representative_set_url: string;
  };
  representative_set_name: string;
  source_url: string;
  url: string;
};

type PostCodeData = {
  boundaries_centroid: Boundary[];
  boundaries_concordance: [];
  centroid: {
    coordinates: number[];
    type: string;
  };
  city: string;
  code: string;
  province: string;
  representatives_centroid: Representative[];
};
type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  postalCode: string;
};

type ShowErrorType = {
  postalCode?: string;
  data?: string;
};

type FormComponentProps = {
  onSubmit: (e: FormEvent) => void;
  modifyValues: (e: React.ChangeEvent<HTMLInputElement>) => void;
  values: FormValues;
  error: ShowErrorType;
  sending: boolean;
};

type ResultsProps = {
  results: Representative[];
};

type MemberProps = {
  item: Representative;
};
