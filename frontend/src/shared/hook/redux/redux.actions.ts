import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import {ThemeSliceActions} from "@/app/store/slices/theme/theme.slice.ts";

const AllActions = {
  ...ThemeSliceActions,
};

export const useActions = () => bindActionCreators(AllActions, useDispatch());