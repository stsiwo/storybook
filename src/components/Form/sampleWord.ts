import { posItem, posItems } from '../PosSelect/posItems';


export interface IWord {
  name: string;
  defs: IDef[]; 
} 

//interface ImageIF {
  //name: string;
  //src: string;
//}

export interface IDef {
  pos: posItem;
  def: string;
  image: string;
}

export const sampleDefs = [
    {
      pos: posItems[0],
      def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be send",
      image: "sample image 1",
     },
    {
      pos: posItems[1],
      def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be send",
      image: "sample image 1",
     },
    {
      pos: posItems[3],
      def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be send",
      image: "sample image 1",
     },
    {
      pos: posItems[4],
      def: "the number of the house, name of the road, and name of the town where a person lives or works, and where letters can be send",
      image: "sample image 1",
     },
];


export const sampleWord: IWord = {

  name: "address",

  defs: sampleDefs,
}

