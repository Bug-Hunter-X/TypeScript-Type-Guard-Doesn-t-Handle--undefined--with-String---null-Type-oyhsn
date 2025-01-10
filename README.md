# TypeScript Type Guard Issue with 'undefined'

This repository demonstrates a subtle issue with TypeScript's type guards when dealing with `string | null` types.  The type guard correctly handles `null`, but fails to handle `undefined` values, resulting in a compiler error even when the logic appears sound.

The `bug.ts` file shows the problem, while `bugSolution.ts` provides a corrected version.

This highlights the importance of explicitly checking for both `null` and `undefined` when working with nullable types in TypeScript.