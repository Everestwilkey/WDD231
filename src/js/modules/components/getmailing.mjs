export default function getMailingAddress(addresses) {
    return addresses.find((address) => address.type === "Mailing");
}
  
