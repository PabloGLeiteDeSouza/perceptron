// utils/parseInput.ts
export function parseInput(violence: number, action: number, romance: number, comedy: number) {
    return {
      violence: parseFloat(violence.toFixed(1)),
      action: parseFloat(action.toFixed(1)),
      romance: parseFloat(romance.toFixed(1)),
      comedy: parseFloat(comedy.toFixed(1)),
    };
}