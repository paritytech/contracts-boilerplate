import { WagmiMintExampleAbi } from "./abi/WagmiMintExample.ts";
import { SignedMathAbi } from "./abi/SignedMath.ts";
import { SafeCastAbi } from "./abi/SafeCast.ts";
import { MathAbi } from "./abi/Math.ts";
import { IERC165Abi } from "./abi/IERC165.ts";
import { ERC165Abi } from "./abi/ERC165.ts";
import { StringsAbi } from "./abi/Strings.ts";
import { PanicAbi } from "./abi/Panic.ts";
import { ContextAbi } from "./abi/Context.ts";
import { Base64Abi } from "./abi/Base64.ts";
import { ERC721UtilsAbi } from "./abi/ERC721Utils.ts";
import { IERC721MetadataAbi } from "./abi/IERC721Metadata.ts";
import { IERC721EnumerableAbi } from "./abi/IERC721Enumerable.ts";
import { ERC721EnumerableAbi } from "./abi/ERC721Enumerable.ts";
import { IERC721ReceiverAbi } from "./abi/IERC721Receiver.ts";
import { IERC721Abi } from "./abi/IERC721.ts";
import { ERC721Abi } from "./abi/ERC721.ts";
import { IERC721ErrorsAbi } from "./abi/IERC721Errors.ts";
import { IERC20ErrorsAbi } from "./abi/IERC20Errors.ts";
import { IERC1155ErrorsAbi } from "./abi/IERC1155Errors.ts";

export type Abis = typeof abis;
export const abis = {
  IERC1155Errors: IERC1155ErrorsAbi,
  IERC20Errors: IERC20ErrorsAbi,
  IERC721Errors: IERC721ErrorsAbi,
  ERC721: ERC721Abi,
  IERC721: IERC721Abi,
  IERC721Receiver: IERC721ReceiverAbi,
  ERC721Enumerable: ERC721EnumerableAbi,
  IERC721Enumerable: IERC721EnumerableAbi,
  IERC721Metadata: IERC721MetadataAbi,
  ERC721Utils: ERC721UtilsAbi,
  Base64: Base64Abi,
  Context: ContextAbi,
  Panic: PanicAbi,
  Strings: StringsAbi,
  ERC165: ERC165Abi,
  IERC165: IERC165Abi,
  Math: MathAbi,
  SafeCast: SafeCastAbi,
  SignedMath: SignedMathAbi,
  WagmiMintExample: WagmiMintExampleAbi,
};
