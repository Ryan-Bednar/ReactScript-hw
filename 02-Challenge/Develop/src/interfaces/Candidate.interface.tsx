// TODO: Create an interface for the Candidate objects returned by the API
export default interface Candidate {
    id: number | string;
    name: string | null;
    email: string | null;
    phone: string | null;
    skills: string[] | null;
    avatar: string | null;
    }






