import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from './Modal';
import ThemeDecorator from '../ThemeDecorator';
import BottomModal from './AppLayer/BottomModal';
import { 
  selectItemTitle, 
  selectItemDetail, 
  confirmDeleteTitle,
  confirmDeleteDetail,
  sortFilterTitle,
  sortFilterDetail,
} from './modalText';
import SelectModalTest from './SelectModalTest';
import ConfirmModalTest from './ConfirmModalTest';
import SortFilterModalTest from './SortFilterModalTest';
import Sort from './Sort';
import Filter from './Filter';
import SortFilter from './SortFilterContent';
import SearchResults from './BusinessLayer/SearchResults';
import SearchModalContent from './BusinessLayer/SearchModalContent';

const SampleImg1 = require('./assets/autumn-boulder-creek-230629.jpg');
const SampleImg2 = require('./assets/beach-beautiful-bridge-449627.jpg');
const SampleImg3 = require('./assets/bench-carved-stones-cemetery-257360.jpg');
const SampleImg4 = require('./assets/bloom-blooming-blossom-462118.jpg');
const SampleImg5 = require('./assets/blur-branches-foliage-38537.jpg');


interface button {
  name: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const closeBtn: button = {
  name: "Close",
  onClick: (e) => {}, 
}
const confirmBtn: button = {
  name: "Confirm",
  onClick: (e) => {}, 
}
const resetBtn: button = {
  name: "Reset",
  onClick: (e) => {}, 
}

interface ImageIF {
  name: string;
  src: string;
}

const tempImages: ImageIF[] = [
  {
    name: "test-image-1",
    src: SampleImg1,
  },
  {
    name: "test-image-1",
    src: SampleImg2,
  },
  {
    name: "test-image-1",
    src: SampleImg3,
  },
  {
    name: "test-image-1",
    src: SampleImg4,
  },
  {
    name: "test-image-1",
    src: SampleImg5,
  },
  {
    name: "test-image-1",
    src: SampleImg1,
  },
  {
    name: "test-image-1",
    src: SampleImg2,
  },
  {
    name: "test-image-1",
    src: SampleImg3,
  },
  {
    name: "test-image-1",
    src: SampleImg4,
  },
  {
    name: "test-image-1",
    src: SampleImg5,
  },
  {
    name: "test-image-1",
    src: SampleImg1,
  },
  {
    name: "test-image-1",
    src: SampleImg2,
  },
];

const SortEvent: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {};
const FilterEvent: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {};
const SearchClickEvent: (e: React.MouseEvent<HTMLElement>) => void = (e) => {};
 
storiesOf('Modal/Modal', module)
  .addDecorator(( story ) => <ThemeDecorator>{ story() }</ThemeDecorator>) 
  .add("plz select item Modal", () => <Modal title={ selectItemTitle } detail={ selectItemDetail } closeButton={ closeBtn } isOpen={ true }></Modal>)
  .add("plz confirm deletion Modal", () => <Modal title={ confirmDeleteTitle } detail={ confirmDeleteDetail } closeButton={ closeBtn } confirmButton={ confirmBtn } isOpen={ true }></Modal>)
  .add("plz sort Modal", () => <Modal title={ sortFilterTitle } detail={ sortFilterDetail } closeButton={ closeBtn } confirmButton={ confirmBtn } resetButton={ resetBtn } isOpen={ true }><SortFilter onSortChange={ SortEvent } onFilterChange={ FilterEvent }/></Modal>)
  .add("select item warning Modal Test", () => <SelectModalTest title={ selectItemTitle } detail={ selectItemDetail }></SelectModalTest>)
  .add("confirm deletion Modal Test", () => <ConfirmModalTest title={ confirmDeleteTitle } detail={ confirmDeleteDetail }></ConfirmModalTest>)
  .add("sort filter Modal Test", () => <SortFilterModalTest title={ sortFilterTitle } detail={ sortFilterDetail } onSortChange={ SortEvent } onFilterChange={ FilterEvent }></SortFilterModalTest>)

storiesOf('Modal/Sort Filter Conent', module)
  .addDecorator(( story ) => <ThemeDecorator>{ story() }</ThemeDecorator>) 
  .add("Sort radio input", () => <Sort ></Sort>)
  .add("Filter checkbox input", () => <Filter ></Filter>)

storiesOf('Modal', module)
  .addDecorator(( story ) => <ThemeDecorator>{ story() }</ThemeDecorator>) 
  .add("BottomModal", () => <BottomModal isOpen={ true } handleSearchImageToggleClick={ SearchClickEvent }><SearchModalContent initialSearchInput="initial search input" /></BottomModal>); 

storiesOf('Modal/SearchModal', module)
  .addDecorator(( story ) => <ThemeDecorator>{ story() }</ThemeDecorator>) 
  .add("SearchResults", () => <SearchResults items={ tempImages }/> );
  
