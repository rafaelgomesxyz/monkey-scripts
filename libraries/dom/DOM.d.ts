declare type ElementArrayConstructor<
	T extends [any, any] | ElementArrayChildrenBase | null,
	N extends number
> = T extends [infer A, infer B]
	? {
			done: [A, B, ElementArrayChildrenBase | null];
			recurse: [
				A,
				B,
				(
					| ElementArrayConstructor<ElementArrayBase, ElementArrayDepth[N]>[]
					| ElementArrayChildrenBase
					| null
				)
			];
	  }[N extends 0 ? 'done' : 'recurse']
	: T extends ElementArrayChildrenBase | null
	? T
	: never;
