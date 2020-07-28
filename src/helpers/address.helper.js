import { Provinces, Districts, Sectors, Cells, Villages } from "rwanda";

class AddressHelper {
  static  getDistrict(province) {
    return  Districts(`${province}`);
  }
  static  getSector(province,district) {
    return  Sectors(`${province}`,`${district}`);
  }
}

export default AddressHelper;
