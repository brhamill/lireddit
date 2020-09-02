import { MiddlewareFn } from 'type-graphql';
import { DTGContext } from '../types';

export const isAuth: MiddlewareFn<DTGContext> = ({ context }, next) => {
  if (!context.req.session!.userId) {
    throw new Error('not authenticated');
  }

  return next();
};
