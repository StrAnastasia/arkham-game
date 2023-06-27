const currentTeam: CurrentTeam = {
  code: 'c8097111-728b-428d-8138-7a4db30b5d9b',
  name: "currentTeam",
  solved: [9],
};

export default currentTeam;

export interface CurrentTeam {
  code: string;
  name: string;
  solved: number[];
}
