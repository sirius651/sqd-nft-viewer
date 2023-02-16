import {Abi} from "@subsquid/ink-abi"

export const metadata = {
  "source": {
    "hash": "0x9565a6a8b24370a46cfd5c5382ffda513ce3a6c11edb2ddae4005bf17ee44373",
    "language": "ink! 3.4.0",
    "compiler": "rustc 1.65.0-nightly"
  },
  "contract": {
    "name": "rmrk_contract",
    "version": "0.6.0",
    "authors": [
      "Stake Technologies <devops@stake.co.jp>"
    ]
  },
  "V3": {
    "spec": {
      "constructors": [
        {
          "args": [
            {
              "label": "name",
              "type": {
                "displayName": [
                  "String"
                ],
                "type": 7
              }
            },
            {
              "label": "symbol",
              "type": {
                "displayName": [
                  "String"
                ],
                "type": 7
              }
            },
            {
              "label": "base_uri",
              "type": {
                "displayName": [
                  "String"
                ],
                "type": 7
              }
            },
            {
              "label": "max_supply",
              "type": {
                "displayName": [
                  "u64"
                ],
                "type": 5
              }
            },
            {
              "label": "price_per_mint",
              "type": {
                "displayName": [
                  "Balance"
                ],
                "type": 6
              }
            },
            {
              "label": "collection_metadata",
              "type": {
                "displayName": [
                  "String"
                ],
                "type": 7
              }
            },
            {
              "label": "_royalty_receiver",
              "type": {
                "displayName": [
                  "AccountId"
                ],
                "type": 8
              }
            },
            {
              "label": "_royalty",
              "type": {
                "displayName": [
                  "u8"
                ],
                "type": 2
              }
            }
          ],
          "docs": [
            "Instantiate new RMRK contract"
          ],
          "label": "new",
          "payable": false,
          "selector": "0x9bae9d5e"
        }
      ],
      "docs": [],
      "events": [
        {
          "args": [
            {
              "docs": [],
              "indexed": true,
              "label": "from",
              "type": {
                "displayName": [
                  "Option"
                ],
                "type": 19
              }
            },
            {
              "docs": [],
              "indexed": true,
              "label": "to",
              "type": {
                "displayName": [
                  "Option"
                ],
                "type": 19
              }
            },
            {
              "docs": [],
              "indexed": true,
              "label": "id",
              "type": {
                "displayName": [
                  "Id"
                ],
                "type": 1
              }
            }
          ],
          "docs": [
            " Event emitted when a token transfer occurs."
          ],
          "label": "Transfer"
        },
        {
          "args": [
            {
              "docs": [],
              "indexed": true,
              "label": "from",
              "type": {
                "displayName": [
                  "AccountId"
                ],
                "type": 8
              }
            },
            {
              "docs": [],
              "indexed": true,
              "label": "to",
              "type": {
                "displayName": [
                  "AccountId"
                ],
                "type": 8
              }
            },
            {
              "docs": [],
              "indexed": true,
              "label": "id",
              "type": {
                "displayName": [
                  "Option"
                ],
                "type": 14
              }
            },
            {
              "docs": [],
              "indexed": false,
              "label": "approved",
              "type": {
                "displayName": [
                  "bool"
                ],
                "type": 39
              }
            }
          ],
          "docs": [
            " Event emitted when a token approve occurs."
          ],
          "label": "Approval"
        },
        {
          "args": [
            {
              "docs": [],
              "indexed": true,
              "label": "to",
              "type": {
                "displayName": [
                  "Id"
                ],
                "type": 1
              }
            },
            {
              "docs": [],
              "indexed": true,
              "label": "collection",
              "type": {
                "displayName": [
                  "AccountId"
                ],
                "type": 8
              }
            },
            {
              "docs": [],
              "indexed": true,
              "label": "child",
              "type": {
                "displayName": [
                  "Id"
                ],
                "type": 1
              }
            }
          ],
          "docs": [
            " Event emitted when a new child is added."
          ],
          "label": "ChildAdded"
        },
        {
          "args": [
            {
              "docs": [],
              "indexed": true,
              "label": "parent",
              "type": {
                "displayName": [
                  "Id"
                ],
                "type": 1
              }
            },
            {
              "docs": [],
              "indexed": true,
              "label": "collection",
              "type": {
                "displayName": [
                  "AccountId"
                ],
                "type": 8
              }
            },
            {
              "docs": [],
              "indexed": true,
              "label": "child",
              "type": {
                "displayName": [
                  "Id"
                ],
                "type": 1
              }
            }
          ],
          "docs": [
            " Event emitted when a child is accepted."
          ],
          "label": "ChildAccepted"
        },
        {
          "args": [
            {
              "docs": [],
              "indexed": true,
              "label": "parent",
              "type": {
                "displayName": [
                  "Id"
                ],
                "type": 1
              }
            },
            {
              "docs": [],
              "indexed": true,
              "label": "child_collection",
              "type": {
                "displayName": [
                  "AccountId"
                ],
                "type": 8
              }
            },
            {
              "docs": [],
              "indexed": true,
              "label": "child_token_id",
              "type": {
                "displayName": [
                  "Id"
                ],
                "type": 1
              }
            }
          ],
          "docs": [
            " Event emitted when a child is removed."
          ],
          "label": "ChildRemoved"
        },
        {
          "args": [
            {
              "docs": [],
              "indexed": true,
              "label": "parent",
              "type": {
                "displayName": [
                  "Id"
                ],
                "type": 1
              }
            },
            {
              "docs": [],
              "indexed": true,
              "label": "child_collection",
              "type": {
                "displayName": [
                  "AccountId"
                ],
                "type": 8
              }
            },
            {
              "docs": [],
              "indexed": true,
              "label": "child_token_id",
              "type": {
                "displayName": [
                  "Id"
                ],
                "type": 1
              }
            }
          ],
          "docs": [
            " Event emitted when a child is rejected."
          ],
          "label": "ChildRejected"
        },
        {
          "args": [
            {
              "docs": [],
              "indexed": true,
              "label": "asset",
              "type": {
                "displayName": [
                  "AssetId"
                ],
                "type": 4
              }
            }
          ],
          "docs": [
            " Event emitted when new asset is set for the collection."
          ],
          "label": "AssetSet"
        },
        {
          "args": [
            {
              "docs": [],
              "indexed": true,
              "label": "token",
              "type": {
                "displayName": [
                  "Id"
                ],
                "type": 1
              }
            },
            {
              "docs": [],
              "indexed": true,
              "label": "asset",
              "type": {
                "displayName": [
                  "AssetId"
                ],
                "type": 4
              }
            },
            {
              "docs": [],
              "indexed": true,
              "label": "replaces",
              "type": {
                "displayName": [
                  "Option"
                ],
                "type": 14
              }
            }
          ],
          "docs": [
            " Event emitted when the asset is added to the token."
          ],
          "label": "AssetAddedToToken"
        },
        {
          "args": [
            {
              "docs": [],
              "indexed": true,
              "label": "token",
              "type": {
                "displayName": [
                  "Id"
                ],
                "type": 1
              }
            },
            {
              "docs": [],
              "indexed": true,
              "label": "asset",
              "type": {
                "displayName": [
                  "AssetId"
                ],
                "type": 4
              }
            }
          ],
          "docs": [
            " Event emitted when the asset is accepted."
          ],
          "label": "AssetAccepted"
        },
        {
          "args": [
            {
              "docs": [],
              "indexed": true,
              "label": "token",
              "type": {
                "displayName": [
                  "Id"
                ],
                "type": 1
              }
            },
            {
              "docs": [],
              "indexed": true,
              "label": "asset",
              "type": {
                "displayName": [
                  "AssetId"
                ],
                "type": 4
              }
            }
          ],
          "docs": [
            " Event emitted when the asset is rejected."
          ],
          "label": "AssetRejected"
        },
        {
          "args": [
            {
              "docs": [],
              "indexed": true,
              "label": "token",
              "type": {
                "displayName": [
                  "Id"
                ],
                "type": 1
              }
            },
            {
              "docs": [],
              "indexed": true,
              "label": "asset",
              "type": {
                "displayName": [
                  "AssetId"
                ],
                "type": 4
              }
            }
          ],
          "docs": [
            " Event emitted when the asset is removed."
          ],
          "label": "AssetRemoved"
        },
        {
          "args": [
            {
              "docs": [],
              "indexed": true,
              "label": "token",
              "type": {
                "displayName": [
                  "Id"
                ],
                "type": 1
              }
            },
            {
              "docs": [],
              "indexed": true,
              "label": "priorities",
              "type": {
                "displayName": [
                  "Vec"
                ],
                "type": 32
              }
            }
          ],
          "docs": [
            " Event emitted when the asset is removed."
          ],
          "label": "AssetPrioritySet"
        },
        {
          "args": [
            {
              "docs": [],
              "indexed": true,
              "label": "token",
              "type": {
                "displayName": [
                  "Id"
                ],
                "type": 1
              }
            },
            {
              "docs": [],
              "indexed": true,
              "label": "asset",
              "type": {
                "displayName": [
                  "AssetId"
                ],
                "type": 4
              }
            },
            {
              "docs": [],
              "indexed": true,
              "label": "child",
              "type": {
                "displayName": [
                  "Id"
                ],
                "type": 1
              }
            },
            {
              "docs": [],
              "indexed": true,
              "label": "child_asset",
              "type": {
                "displayName": [
                  "AssetId"
                ],
                "type": 4
              }
            }
          ],
          "docs": [
            " Event emitted when the asset is equipped."
          ],
          "label": "AssetEquipped"
        },
        {
          "args": [
            {
              "docs": [],
              "indexed": true,
              "label": "token",
              "type": {
                "displayName": [
                  "Id"
                ],
                "type": 1
              }
            },
            {
              "docs": [],
              "indexed": true,
              "label": "asset",
              "type": {
                "displayName": [
                  "AssetId"
                ],
                "type": 4
              }
            },
            {
              "docs": [],
              "indexed": true,
              "label": "slot",
              "type": {
                "displayName": [
                  "SlotId"
                ],
                "type": 4
              }
            }
          ],
          "docs": [
            " Event emitted when the asset is un-equipped."
          ],
          "label": "AssetUnEquipped"
        },
        {
          "args": [
            {
              "docs": [],
              "indexed": true,
              "label": "group",
              "type": {
                "displayName": [
                  "EquippableGroupId"
                ],
                "type": 4
              }
            },
            {
              "docs": [],
              "indexed": true,
              "label": "slot",
              "type": {
                "displayName": [
                  "SlotId"
                ],
                "type": 4
              }
            },
            {
              "docs": [],
              "indexed": true,
              "label": "parent",
              "type": {
                "displayName": [
                  "AccountId"
                ],
                "type": 8
              }
            }
          ],
          "docs": [
            " Used to notify listeners that the assets belonging to a `equippableGroupId` have been marked as",
            " equippable into a given slot and parent"
          ],
          "label": "ParentEquippableGroupSet"
        }
      ],
      "messages": [
        {
          "args": [],
          "docs": [
            " Returns the collection `Id` of the NFT token.",
            "",
            " This can represents the relationship between tokens/contracts/pallets."
          ],
          "label": "PSP34::collection_id",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "psp34_external",
              "CollectionIdOutput"
            ],
            "type": 1
          },
          "selector": "0xffa27a5f"
        },
        {
          "args": [
            {
              "label": "id",
              "type": {
                "displayName": [
                  "psp34_external",
                  "OwnerOfInput1"
                ],
                "type": 1
              }
            }
          ],
          "docs": [
            " Returns the owner of the token if any."
          ],
          "label": "PSP34::owner_of",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "psp34_external",
              "OwnerOfOutput"
            ],
            "type": 19
          },
          "selector": "0x1168624d"
        },
        {
          "args": [
            {
              "label": "owner",
              "type": {
                "displayName": [
                  "psp34_external",
                  "AllowanceInput1"
                ],
                "type": 8
              }
            },
            {
              "label": "operator",
              "type": {
                "displayName": [
                  "psp34_external",
                  "AllowanceInput2"
                ],
                "type": 8
              }
            },
            {
              "label": "id",
              "type": {
                "displayName": [
                  "psp34_external",
                  "AllowanceInput3"
                ],
                "type": 14
              }
            }
          ],
          "docs": [
            " Returns `true` if the operator is approved by the owner to withdraw `id` token.",
            " If `id` is `None`, returns `true` if the operator is approved to withdraw all owner's tokens."
          ],
          "label": "PSP34::allowance",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "psp34_external",
              "AllowanceOutput"
            ],
            "type": 39
          },
          "selector": "0x4790f55a"
        },
        {
          "args": [
            {
              "label": "operator",
              "type": {
                "displayName": [
                  "psp34_external",
                  "ApproveInput1"
                ],
                "type": 8
              }
            },
            {
              "label": "id",
              "type": {
                "displayName": [
                  "psp34_external",
                  "ApproveInput2"
                ],
                "type": 14
              }
            },
            {
              "label": "approved",
              "type": {
                "displayName": [
                  "psp34_external",
                  "ApproveInput3"
                ],
                "type": 39
              }
            }
          ],
          "docs": [
            " Approves `operator` to withdraw the `id` token from the caller's account.",
            " If `id` is `None` approves or disapproves the operator for all tokens of the caller.",
            "",
            " On success a `Approval` event is emitted.",
            "",
            " # Errors",
            "",
            " Returns `SelfApprove` error if it is self approve.",
            "",
            " Returns `NotApproved` error if caller is not owner of `id`."
          ],
          "label": "PSP34::approve",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "psp34_external",
              "ApproveOutput"
            ],
            "type": 45
          },
          "selector": "0x1932a8b0"
        },
        {
          "args": [
            {
              "label": "owner",
              "type": {
                "displayName": [
                  "psp34_external",
                  "BalanceOfInput1"
                ],
                "type": 8
              }
            }
          ],
          "docs": [
            " Returns the balance of the owner.",
            "",
            " This represents the amount of unique tokens the owner has."
          ],
          "label": "PSP34::balance_of",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "psp34_external",
              "BalanceOfOutput"
            ],
            "type": 4
          },
          "selector": "0xcde7e55f"
        },
        {
          "args": [],
          "docs": [
            " Returns current NFT total supply."
          ],
          "label": "PSP34::total_supply",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "psp34_external",
              "TotalSupplyOutput"
            ],
            "type": 6
          },
          "selector": "0x628413fe"
        },
        {
          "args": [
            {
              "label": "to",
              "type": {
                "displayName": [
                  "psp34_external",
                  "TransferInput1"
                ],
                "type": 8
              }
            },
            {
              "label": "id",
              "type": {
                "displayName": [
                  "psp34_external",
                  "TransferInput2"
                ],
                "type": 1
              }
            },
            {
              "label": "data",
              "type": {
                "displayName": [
                  "psp34_external",
                  "TransferInput3"
                ],
                "type": 7
              }
            }
          ],
          "docs": [
            " Transfer approved or owned token from caller.",
            "",
            " On success a `Transfer` event is emitted.",
            "",
            " # Errors",
            "",
            " Returns `TokenNotExists` error if `id` does not exist.",
            "",
            " Returns `NotApproved` error if `from` doesn't have allowance for transferring.",
            "",
            " Returns `SafeTransferCheckFailed` error if `to` doesn't accept transfer."
          ],
          "label": "PSP34::transfer",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "psp34_external",
              "TransferOutput"
            ],
            "type": 45
          },
          "selector": "0x3128d61b"
        },
        {
          "args": [],
          "docs": [
            " Returns the address of the current owner."
          ],
          "label": "Ownable::owner",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "ownable_external",
              "OwnerOutput"
            ],
            "type": 8
          },
          "selector": "0x4fa43c8c"
        },
        {
          "args": [],
          "docs": [
            " Leaves the contract without owner. It will not be possible to call",
            " owner's functions anymore. Can only be called by the current owner.",
            "",
            " NOTE: Renouncing ownership will leave the contract without an owner,",
            " thereby removing any functionality that is only available to the owner.",
            "",
            " On success a `OwnershipTransferred` event is emitted.",
            "",
            " # Errors",
            "",
            " Panics with `CallerIsNotOwner` error if caller is not owner"
          ],
          "label": "Ownable::renounce_ownership",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "ownable_external",
              "RenounceOwnershipOutput"
            ],
            "type": 47
          },
          "selector": "0x5e228753"
        },
        {
          "args": [
            {
              "label": "new_owner",
              "type": {
                "displayName": [
                  "ownable_external",
                  "TransferOwnershipInput1"
                ],
                "type": 8
              }
            }
          ],
          "docs": [
            " Transfers ownership of the contract to a `new_owner`.",
            " Can only be called by the current owner.",
            "",
            " On success a `OwnershipTransferred` event is emitted.",
            "",
            " # Errors",
            "",
            " Panics with `CallerIsNotOwner` error if caller is not owner.",
            "",
            " Panics with `NewOwnerIsZero` error if new owner's address is zero."
          ],
          "label": "Ownable::transfer_ownership",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "ownable_external",
              "TransferOwnershipOutput"
            ],
            "type": 47
          },
          "selector": "0x11f43efd"
        },
        {
          "args": [
            {
              "label": "id",
              "type": {
                "displayName": [
                  "psp34metadata_external",
                  "GetAttributeInput1"
                ],
                "type": 1
              }
            },
            {
              "label": "key",
              "type": {
                "displayName": [
                  "psp34metadata_external",
                  "GetAttributeInput2"
                ],
                "type": 7
              }
            }
          ],
          "docs": [
            " Returns the attribute of `id` for the given `key`.",
            "",
            " If `id` is a collection id of the token, it returns attributes for collection."
          ],
          "label": "PSP34Metadata::get_attribute",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "psp34metadata_external",
              "GetAttributeOutput"
            ],
            "type": 49
          },
          "selector": "0xf19d48d1"
        },
        {
          "args": [
            {
              "label": "index",
              "type": {
                "displayName": [
                  "psp34enumerable_external",
                  "TokenByIndexInput1"
                ],
                "type": 6
              }
            }
          ],
          "docs": [
            " Returns a token `Id` at a given `index` of all the tokens stored by the contract.",
            " Use along with `total_supply` to enumerate all tokens.",
            "",
            " The start index is zero."
          ],
          "label": "PSP34Enumerable::token_by_index",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "psp34enumerable_external",
              "TokenByIndexOutput"
            ],
            "type": 50
          },
          "selector": "0xcd0340d0"
        },
        {
          "args": [
            {
              "label": "owner",
              "type": {
                "displayName": [
                  "psp34enumerable_external",
                  "OwnersTokenByIndexInput1"
                ],
                "type": 8
              }
            },
            {
              "label": "index",
              "type": {
                "displayName": [
                  "psp34enumerable_external",
                  "OwnersTokenByIndexInput2"
                ],
                "type": 6
              }
            }
          ],
          "docs": [
            " Returns a token `Id` owned by `owner` at a given `index` of its token list.",
            " Use along with `balance_of` to enumerate all of ``owner``'s tokens.",
            "",
            " The start index is zero."
          ],
          "label": "PSP34Enumerable::owners_token_by_index",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "psp34enumerable_external",
              "OwnersTokenByIndexOutput"
            ],
            "type": 50
          },
          "selector": "0x3bcfb511"
        },
        {
          "args": [],
          "docs": [
            " Get max supply of tokens."
          ],
          "label": "Utils::max_supply",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "utils_external",
              "MaxSupplyOutput"
            ],
            "type": 5
          },
          "selector": "0xa630eda5"
        },
        {
          "args": [],
          "docs": [
            " Get token mint price."
          ],
          "label": "Utils::price",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "utils_external",
              "PriceOutput"
            ],
            "type": 6
          },
          "selector": "0xc0cfc5b0"
        },
        {
          "args": [
            {
              "label": "uri",
              "type": {
                "displayName": [
                  "utils_external",
                  "SetBaseUriInput1"
                ],
                "type": 51
              }
            }
          ],
          "docs": [
            " Set new value for the baseUri."
          ],
          "label": "Utils::set_base_uri",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "utils_external",
              "SetBaseUriOutput"
            ],
            "type": 45
          },
          "selector": "0x649f10b7"
        },
        {
          "args": [
            {
              "label": "token_id",
              "type": {
                "displayName": [
                  "utils_external",
                  "TokenUriInput1"
                ],
                "type": 5
              }
            }
          ],
          "docs": [
            " Get URI for the token Id."
          ],
          "label": "Utils::token_uri",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "utils_external",
              "TokenUriOutput"
            ],
            "type": 52
          },
          "selector": "0x4f3406ca"
        },
        {
          "args": [],
          "docs": [
            " Withdraw contract's balance."
          ],
          "label": "Utils::withdraw",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "utils_external",
              "WithdrawOutput"
            ],
            "type": 45
          },
          "selector": "0x994b3077"
        },
        {
          "args": [
            {
              "label": "to",
              "type": {
                "displayName": [
                  "minting_external",
                  "MintInput1"
                ],
                "type": 8
              }
            },
            {
              "label": "mint_amount",
              "type": {
                "displayName": [
                  "minting_external",
                  "MintInput2"
                ],
                "type": 5
              }
            }
          ],
          "docs": [
            " Mint one or more tokens."
          ],
          "label": "Minting::mint",
          "mutates": true,
          "payable": true,
          "returnType": {
            "displayName": [
              "minting_external",
              "MintOutput"
            ],
            "type": 45
          },
          "selector": "0x0f8c5089"
        },
        {
          "args": [
            {
              "label": "metadata",
              "type": {
                "displayName": [
                  "minting_external",
                  "MintWithMetadataInput1"
                ],
                "type": 51
              }
            },
            {
              "label": "to",
              "type": {
                "displayName": [
                  "minting_external",
                  "MintWithMetadataInput2"
                ],
                "type": 8
              }
            }
          ],
          "docs": [
            " Mint next available token with specific metadata"
          ],
          "label": "Minting::mint_with_metadata",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "minting_external",
              "MintWithMetadataOutput"
            ],
            "type": 45
          },
          "selector": "0xc125efc7"
        },
        {
          "args": [],
          "docs": [
            " Mint next available token for the caller."
          ],
          "label": "Minting::mint_next",
          "mutates": true,
          "payable": true,
          "returnType": {
            "displayName": [
              "minting_external",
              "MintNextOutput"
            ],
            "type": 45
          },
          "selector": "0xe1ca1a29"
        },
        {
          "args": [
            {
              "label": "parent_token_id",
              "type": {
                "displayName": [
                  "nesting_external",
                  "ChildrenBalanceInput1"
                ],
                "type": 1
              }
            }
          ],
          "docs": [
            " Read the number of children on the parent token.",
            " # Arguments:",
            " * `parent_token_id`: parent tokenId to check",
            "",
            " # Result:",
            " Returns the tupple of `(accepted_children, pending_children)` count"
          ],
          "label": "Nesting::children_balance",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "nesting_external",
              "ChildrenBalanceOutput"
            ],
            "type": 53
          },
          "selector": "0x2348106c"
        },
        {
          "args": [
            {
              "label": "parent_token_id",
              "type": {
                "displayName": [
                  "nesting_external",
                  "AddChildInput1"
                ],
                "type": 1
              }
            },
            {
              "label": "child_nft",
              "type": {
                "displayName": [
                  "nesting_external",
                  "AddChildInput2"
                ],
                "type": 28
              }
            }
          ],
          "docs": [
            " Add a child NFT (from different collection) to the NFT in this collection.",
            " The status of the added child is `Pending` if caller is not owner of child NFT",
            " The status of the added child is `Accepted` if caller is is owner of child NFT",
            " The caller needs not to be the owner of the to_parent_token_id, but",
            " Caller must be owner of the child NFT,",
            " in order to perform transfer() ownership of the child nft to to_parent_token_id.",
            "",
            " # Requirements:",
            " * `child_contract_address` needs to be added by collecion owner",
            " * `to_parent_token_id` must exist.",
            " * `child_token_id` must exist.",
            " * There cannot be two identical children.",
            "",
            " # Arguments:",
            " * `to_parent_token_id`: is the tokenId of the parent NFT. The receiver of child.",
            " * `child_nft`: (collection_id, token_id) of the child instance.",
            "",
            " # Result:",
            " Ownership of child NFT will be transferred to this contract (cross contract call)",
            " On success emitts `RmrkEvent::ChildAdded`",
            " On success emitts `RmrkEvent::ChildAccepted` - only if caller is already owner of child NFT"
          ],
          "label": "Nesting::add_child",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "nesting_external",
              "AddChildOutput"
            ],
            "type": 45
          },
          "selector": "0x1d6f5156"
        },
        {
          "args": [
            {
              "label": "parent_token_id",
              "type": {
                "displayName": [
                  "nesting_external",
                  "RejectChildInput1"
                ],
                "type": 1
              }
            },
            {
              "label": "child_nft",
              "type": {
                "displayName": [
                  "nesting_external",
                  "RejectChildInput2"
                ],
                "type": 28
              }
            }
          ],
          "docs": [
            " Reject a child NFT (from different collection).",
            "",
            " # Requirements:",
            " * The status of the child is `Pending`",
            "",
            " # Arguments:",
            " * `parent_token_id`: is the tokenId of the parent NFT.",
            " * `child_nft`: (collection_id, token_id) of the child instance.",
            "",
            " # Result:",
            " Child Nft is removed from pending",
            " On success emitts `RmrkEvent::ChildRejected`"
          ],
          "label": "Nesting::reject_child",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "nesting_external",
              "RejectChildOutput"
            ],
            "type": 45
          },
          "selector": "0xdd308ed4"
        },
        {
          "args": [
            {
              "label": "from",
              "type": {
                "displayName": [
                  "nesting_external",
                  "TransferChildInput1"
                ],
                "type": 1
              }
            },
            {
              "label": "to",
              "type": {
                "displayName": [
                  "nesting_external",
                  "TransferChildInput2"
                ],
                "type": 1
              }
            },
            {
              "label": "child_nft",
              "type": {
                "displayName": [
                  "nesting_external",
                  "TransferChildInput3"
                ],
                "type": 28
              }
            }
          ],
          "docs": [
            " Transfer the child NFT from one parent to another (in this collection).",
            "",
            " # Requirements:",
            " * The status of the child is `Accepted`",
            "",
            " # Arguments:",
            " * `current_parent`: current parent tokenId which holds child nft",
            " * `new_parent`: new parent tokenId which will hold child nft",
            " * `child_nft`: (collection_id, token_id) of the child instance.",
            "",
            " # Result:",
            " Ownership of child NFT will be transferred to this contract (cross contract call)",
            " On success emitts `RmrkEvent::ChildAdded`",
            " On success emitts `RmrkEvent::ChildAccepted` - only if caller is already owner of child NFT"
          ],
          "label": "Nesting::transfer_child",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "nesting_external",
              "TransferChildOutput"
            ],
            "type": 45
          },
          "selector": "0xdb43324e"
        },
        {
          "args": [
            {
              "label": "parent_token_id",
              "type": {
                "displayName": [
                  "nesting_external",
                  "RemoveChildInput1"
                ],
                "type": 1
              }
            },
            {
              "label": "child_nft",
              "type": {
                "displayName": [
                  "nesting_external",
                  "RemoveChildInput2"
                ],
                "type": 28
              }
            }
          ],
          "docs": [
            " Remove a child NFT (from different collection) from token_id in this collection.",
            " The status of added child is `Pending` if caller is not owner of child NFT",
            " The status of added child is `Accepted` if caller is is owner of child NFT",
            "",
            " # Requirements:",
            " * The status of the child is `Accepted`",
            "",
            " # Arguments:",
            " * `parent_token_id`: is the tokenId of the parent NFT.",
            " * `child_nft`: (collection_id, token_id) of the child instance.",
            "",
            " # Result:",
            " Ownership of child NFT will be transferred to parent NFT owner (cross contract call)",
            " On success emitts `RmrkEvent::ChildRemoved`"
          ],
          "label": "Nesting::remove_child",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "nesting_external",
              "RemoveChildOutput"
            ],
            "type": 45
          },
          "selector": "0x27e7420e"
        },
        {
          "args": [
            {
              "label": "parent_token_id",
              "type": {
                "displayName": [
                  "nesting_external",
                  "AcceptChildInput1"
                ],
                "type": 1
              }
            },
            {
              "label": "child_nft",
              "type": {
                "displayName": [
                  "nesting_external",
                  "AcceptChildInput2"
                ],
                "type": 28
              }
            }
          ],
          "docs": [
            " Accept a child NFT (from different collection) to be owned by parent token.",
            "",
            " # Requirements:",
            " * The status of the child is `Pending`",
            "",
            " # Arguments:",
            " * `parent_token_id`: is the tokenId of the parent NFT.",
            " * `child_nft`: (collection_id, token_id) of the child instance.",
            "",
            " # Result:",
            " Child Nft is moved from pending to accepted",
            " On success emitts `RmrkEvent::ChildAccepted`"
          ],
          "label": "Nesting::accept_child",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "nesting_external",
              "AcceptChildOutput"
            ],
            "type": 45
          },
          "selector": "0x3b3e2643"
        },
        {
          "args": [
            {
              "label": "token_id",
              "type": {
                "displayName": [
                  "multiasset_external",
                  "TotalTokenAssetsInput1"
                ],
                "type": 1
              }
            }
          ],
          "docs": [
            " Used to retrieve the total number of assets per token"
          ],
          "label": "MultiAsset::total_token_assets",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "multiasset_external",
              "TotalTokenAssetsOutput"
            ],
            "type": 53
          },
          "selector": "0x525922a3"
        },
        {
          "args": [
            {
              "label": "token_id",
              "type": {
                "displayName": [
                  "multiasset_external",
                  "GetAcceptedTokenAssetsInput1"
                ],
                "type": 1
              }
            }
          ],
          "docs": [
            " Fetch all accepted assets for the token_id"
          ],
          "label": "MultiAsset::get_accepted_token_assets",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "multiasset_external",
              "GetAcceptedTokenAssetsOutput"
            ],
            "type": 55
          },
          "selector": "0x765ef0e3"
        },
        {
          "args": [
            {
              "label": "token_id",
              "type": {
                "displayName": [
                  "multiasset_external",
                  "RemoveAssetInput1"
                ],
                "type": 1
              }
            },
            {
              "label": "asset_id",
              "type": {
                "displayName": [
                  "multiasset_external",
                  "RemoveAssetInput2"
                ],
                "type": 4
              }
            }
          ],
          "docs": [
            " Remove the assets for the list of token assets"
          ],
          "label": "MultiAsset::remove_asset",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "multiasset_external",
              "RemoveAssetOutput"
            ],
            "type": 45
          },
          "selector": "0xfdbda22c"
        },
        {
          "args": [
            {
              "label": "token_id",
              "type": {
                "displayName": [
                  "multiasset_external",
                  "SetPriorityInput1"
                ],
                "type": 1
              }
            },
            {
              "label": "priorities",
              "type": {
                "displayName": [
                  "multiasset_external",
                  "SetPriorityInput2"
                ],
                "type": 32
              }
            }
          ],
          "docs": [
            " Used to specify the priorities for a given token's active assets.",
            " If the length of the priorities array doesn't match the length of the active assets array, the execution",
            "  will be reverted.",
            " The position of the priority value in the array corresponds the position of the asset in the active",
            "  assets array it will be applied to.",
            " # Arguments",
            "  * tokenId ID of the token for which the priorities are being set",
            "  * priorities Array of priorities for the assets",
            " Emits a {AssetPrioritySet} event."
          ],
          "label": "MultiAsset::set_priority",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "multiasset_external",
              "SetPriorityOutput"
            ],
            "type": 45
          },
          "selector": "0x1fde0ead"
        },
        {
          "args": [
            {
              "label": "token_id",
              "type": {
                "displayName": [
                  "multiasset_external",
                  "AddAssetToTokenInput1"
                ],
                "type": 1
              }
            },
            {
              "label": "asset_id",
              "type": {
                "displayName": [
                  "multiasset_external",
                  "AddAssetToTokenInput2"
                ],
                "type": 4
              }
            },
            {
              "label": "replaces_asset_with_id",
              "type": {
                "displayName": [
                  "multiasset_external",
                  "AddAssetToTokenInput3"
                ],
                "type": 14
              }
            }
          ],
          "docs": [
            " Used to add an asset to a token.",
            " If the given asset is already added to the token, the execution will be reverted.",
            " If the asset ID is invalid, the execution will be reverted.",
            " If the token already has the maximum amount of pending assets (128), the execution will be",
            " reverted.",
            " If the asset is being added by the current root owner of the token, the asset will be automatically",
            " accepted.",
            " # Arguments",
            "  * tokenId ID of the token to add the asset to",
            "  * assetId ID of the asset to add to the token",
            "  * replacesAssetWithId ID of the asset to replace from the token's list of active assets",
            " Emits an {AssetAddedToToken} event."
          ],
          "label": "MultiAsset::add_asset_to_token",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "multiasset_external",
              "AddAssetToTokenOutput"
            ],
            "type": 45
          },
          "selector": "0xe893e17a"
        },
        {
          "args": [
            {
              "label": "id",
              "type": {
                "displayName": [
                  "multiasset_external",
                  "AddAssetEntryInput1"
                ],
                "type": 4
              }
            },
            {
              "label": "equippable_group_id",
              "type": {
                "displayName": [
                  "multiasset_external",
                  "AddAssetEntryInput2"
                ],
                "type": 4
              }
            },
            {
              "label": "asset_uri",
              "type": {
                "displayName": [
                  "multiasset_external",
                  "AddAssetEntryInput3"
                ],
                "type": 7
              }
            },
            {
              "label": "part_ids",
              "type": {
                "displayName": [
                  "multiasset_external",
                  "AddAssetEntryInput4"
                ],
                "type": 32
              }
            }
          ],
          "docs": [
            " Used to add a asset entry.",
            " The ID of the asset is automatically assigned to be the next available asset ID.",
            " # Arguments",
            "  * `asset_uri` Uri for the new asset",
            " Emits an {AssetSet} event."
          ],
          "label": "MultiAsset::add_asset_entry",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "multiasset_external",
              "AddAssetEntryOutput"
            ],
            "type": 45
          },
          "selector": "0x5427f3c0"
        },
        {
          "args": [
            {
              "label": "asset_id",
              "type": {
                "displayName": [
                  "multiasset_external",
                  "GetAssetUriInput1"
                ],
                "type": 4
              }
            }
          ],
          "docs": [
            " Used to retrieve asset's uri"
          ],
          "label": "MultiAsset::get_asset_uri",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "multiasset_external",
              "GetAssetUriOutput"
            ],
            "type": 49
          },
          "selector": "0xb677b85c"
        },
        {
          "args": [
            {
              "label": "token_id",
              "type": {
                "displayName": [
                  "multiasset_external",
                  "RejectAssetInput1"
                ],
                "type": 1
              }
            },
            {
              "label": "asset_id",
              "type": {
                "displayName": [
                  "multiasset_external",
                  "RejectAssetInput2"
                ],
                "type": 4
              }
            }
          ],
          "docs": [
            " Rejects an asset from the pending array of given token.",
            " Removes the asset from the token's pending asset array.",
            " # Requirements:",
            "  * The caller must own the token or be approved to manage the token's assets",
            "  * `tokenId` must exist.",
            "  * `assetId` must be in the pending_asset list.",
            " # Arguments",
            "  * tokenId ID of the token for which to accept the pending asset",
            "  * assetId ID of the asset expected to be in the pending_asset list.",
            " Emits a {AssetRejected} event."
          ],
          "label": "MultiAsset::reject_asset",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "multiasset_external",
              "RejectAssetOutput"
            ],
            "type": 45
          },
          "selector": "0xb3e25a89"
        },
        {
          "args": [],
          "docs": [
            " Used to retrieve the total number of assets.",
            " # Returns",
            "  * u64 The total number of assets"
          ],
          "label": "MultiAsset::total_assets",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "multiasset_external",
              "TotalAssetsOutput"
            ],
            "type": 4
          },
          "selector": "0x9b26f6d8"
        },
        {
          "args": [
            {
              "label": "token_id",
              "type": {
                "displayName": [
                  "multiasset_external",
                  "AcceptAssetInput1"
                ],
                "type": 1
              }
            },
            {
              "label": "asset_id",
              "type": {
                "displayName": [
                  "multiasset_external",
                  "AcceptAssetInput2"
                ],
                "type": 4
              }
            }
          ],
          "docs": [
            " Accepts an asset at from the pending array of given token.",
            " Migrates the asset from the token's pending asset array to the token's active asset array.",
            " Active assets cannot be removed by anyone, but can be replaced by a new asset.",
            " # Requirements:",
            "  * The caller must own the token or be approved to manage the token's assets",
            "  * `tokenId` must exist.",
            "  * `assetId` must be in the pending_asset list.",
            " # Arguments",
            "  * tokenId ID of the token for which to accept the pending asset",
            "  * assetId ID of the asset expected to be in the pending_asset list.",
            " Emits an {AssetAccepted} event."
          ],
          "label": "MultiAsset::accept_asset",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "multiasset_external",
              "AcceptAssetOutput"
            ],
            "type": 45
          },
          "selector": "0xdc2df4e5"
        },
        {
          "args": [
            {
              "label": "part_id",
              "type": {
                "displayName": [
                  "base_external",
                  "ResetEquippableAddressesInput1"
                ],
                "type": 4
              }
            }
          ],
          "docs": [
            " Remove list of equippable addresses for given Part"
          ],
          "label": "Base::reset_equippable_addresses",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "base_external",
              "ResetEquippableAddressesOutput"
            ],
            "type": 45
          },
          "selector": "0xa1771d47"
        },
        {
          "args": [
            {
              "label": "base_metadata",
              "type": {
                "displayName": [
                  "base_external",
                  "SetupBaseInput1"
                ],
                "type": 7
              }
            }
          ],
          "docs": [],
          "label": "Base::setup_base",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "base_external",
              "SetupBaseOutput"
            ],
            "type": 45
          },
          "selector": "0xcd5b2ca6"
        },
        {
          "args": [
            {
              "label": "part_id",
              "type": {
                "displayName": [
                  "base_external",
                  "IsEquippableByAllInput1"
                ],
                "type": 4
              }
            }
          ],
          "docs": [
            " Checks if the given `PartId` can be equipped by any collection"
          ],
          "label": "Base::is_equippable_by_all",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "base_external",
              "IsEquippableByAllOutput"
            ],
            "type": 39
          },
          "selector": "0xc51b3205"
        },
        {
          "args": [
            {
              "label": "part_id",
              "type": {
                "displayName": [
                  "base_external",
                  "GetPartInput1"
                ],
                "type": 4
              }
            }
          ],
          "docs": [
            " Get the part details for the given PartId."
          ],
          "label": "Base::get_part",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "base_external",
              "GetPartOutput"
            ],
            "type": 57
          },
          "selector": "0x4adb5884"
        },
        {
          "args": [
            {
              "label": "parts",
              "type": {
                "displayName": [
                  "base_external",
                  "AddPartListInput1"
                ],
                "type": 58
              }
            }
          ],
          "docs": [
            " Add one or more parts to the base"
          ],
          "label": "Base::add_part_list",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "base_external",
              "AddPartListOutput"
            ],
            "type": 45
          },
          "selector": "0xa69bb397"
        },
        {
          "args": [
            {
              "label": "part_id",
              "type": {
                "displayName": [
                  "base_external",
                  "SetEquippableByAllInput1"
                ],
                "type": 4
              }
            }
          ],
          "docs": [
            " Sets the is_equippable_by_all flag to true, meaning that any collection may be equipped into the `PartId`"
          ],
          "label": "Base::set_equippable_by_all",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "base_external",
              "SetEquippableByAllOutput"
            ],
            "type": 45
          },
          "selector": "0xf02dfddf"
        },
        {
          "args": [],
          "docs": [],
          "label": "Base::get_base_metadata",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "base_external",
              "GetBaseMetadataOutput"
            ],
            "type": 51
          },
          "selector": "0xef4c0817"
        },
        {
          "args": [
            {
              "label": "part_id",
              "type": {
                "displayName": [
                  "base_external",
                  "EnsureEquippableInput1"
                ],
                "type": 4
              }
            },
            {
              "label": "target_address",
              "type": {
                "displayName": [
                  "base_external",
                  "EnsureEquippableInput2"
                ],
                "type": 8
              }
            }
          ],
          "docs": [
            " Check whether the given address is allowed to equip the desired `PartId`."
          ],
          "label": "Base::ensure_equippable",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "base_external",
              "EnsureEquippableOutput"
            ],
            "type": 45
          },
          "selector": "0x00b95e48"
        },
        {
          "args": [
            {
              "label": "part_id",
              "type": {
                "displayName": [
                  "base_external",
                  "AddEquippableAddressesInput1"
                ],
                "type": 4
              }
            },
            {
              "label": "equippable_address",
              "type": {
                "displayName": [
                  "base_external",
                  "AddEquippableAddressesInput2"
                ],
                "type": 38
              }
            }
          ],
          "docs": [
            " Add collection address(es) that can be used to equip given `PartId`."
          ],
          "label": "Base::add_equippable_addresses",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "base_external",
              "AddEquippableAddressesOutput"
            ],
            "type": 45
          },
          "selector": "0x676b2b0e"
        },
        {
          "args": [],
          "docs": [
            " Get the list of all parts."
          ],
          "label": "Base::get_parts_count",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "base_external",
              "GetPartsCountOutput"
            ],
            "type": 4
          },
          "selector": "0x0ae71607"
        },
        {
          "args": [
            {
              "label": "token_id",
              "type": {
                "displayName": [
                  "equippable_external",
                  "GetEquipmentInput1"
                ],
                "type": 1
              }
            },
            {
              "label": "slot_part_id",
              "type": {
                "displayName": [
                  "equippable_external",
                  "GetEquipmentInput2"
                ],
                "type": 4
              }
            }
          ],
          "docs": [
            " Used to extend already added Asset with details needed to support equipping.",
            " These details are not present in MultiAsset trait to avoid dependencies on Equippable trait.",
            " # Arguments:",
            "  * `asset_id` ID of the asset being extended",
            "  * `equippableGroupId` ID of the equippable group",
            "  * `partIds` An array of IDs of fixed and slot parts to be included in the asset",
            " Used to get the Equipment object equipped into the specified slot of the desired token.",
            "",
            " # Arguments:",
            "  * `token_id` ID of the token for which we are retrieving the equipped object",
            "  * `slot_part_id` ID of the `Slot` part that we are checking for equipped objects"
          ],
          "label": "Equippable::get_equipment",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "equippable_external",
              "GetEquipmentOutput"
            ],
            "type": 59
          },
          "selector": "0xce09be8e"
        },
        {
          "args": [
            {
              "label": "token_id",
              "type": {
                "displayName": [
                  "equippable_external",
                  "EquipInput1"
                ],
                "type": 1
              }
            },
            {
              "label": "asset_id",
              "type": {
                "displayName": [
                  "equippable_external",
                  "EquipInput2"
                ],
                "type": 4
              }
            },
            {
              "label": "slot_part_id",
              "type": {
                "displayName": [
                  "equippable_external",
                  "EquipInput3"
                ],
                "type": 4
              }
            },
            {
              "label": "child_nft",
              "type": {
                "displayName": [
                  "equippable_external",
                  "EquipInput4"
                ],
                "type": 28
              }
            },
            {
              "label": "child_asset_id",
              "type": {
                "displayName": [
                  "equippable_external",
                  "EquipInput5"
                ],
                "type": 4
              }
            }
          ],
          "docs": [
            " Used to equip a child nft into a token.",
            " # Requirements",
            "  * Called on Parent token contract",
            "  * If the `Slot` already has an item equipped, the execution will be reverted.",
            "  * If the child can't be used in the given `Slot`, the execution will be reverted.",
            "  * If the base doesn't allow this equip to happen, the execution will be reverted.",
            "    ",
            " # Arguments:",
            "  * `token_id ID` of the token that had an asset equipped",
            "  * `asset_id ID` of the asset associated with the token we are equipping into",
            "  * `slot_part_id` ID of the slot we are using to equip",
            "  * `child_nft` Child NFT tuple (CollectionId, Id)",
            "  * `child_asset_id` ID of the asset associated with the token we are equipping",
            " Emits an {ChildAssetEquipped} event."
          ],
          "label": "Equippable::equip",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "equippable_external",
              "EquipOutput"
            ],
            "type": 45
          },
          "selector": "0x3553c8d4"
        },
        {
          "args": [
            {
              "label": "token_id",
              "type": {
                "displayName": [
                  "equippable_external",
                  "GetAssetAndEquippableDataInput1"
                ],
                "type": 1
              }
            },
            {
              "label": "asset_id",
              "type": {
                "displayName": [
                  "equippable_external",
                  "GetAssetAndEquippableDataInput2"
                ],
                "type": 4
              }
            }
          ],
          "docs": [
            " Used to get the asset and equippable data associated with given `asset_id`.",
            " # Arguments:",
            "  * tokenId ID of the token for which to retrieve the asset",
            "  * asset_id ID of the asset of which we are retrieving",
            " # Returns:",
            "    * asset_id metadataURI,",
            "    * EquippableAsset"
          ],
          "label": "Equippable::get_asset_and_equippable_data",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "equippable_external",
              "GetAssetAndEquippableDataOutput"
            ],
            "type": 60
          },
          "selector": "0xeddf27de"
        },
        {
          "args": [
            {
              "label": "token_id",
              "type": {
                "displayName": [
                  "equippable_external",
                  "UnequipInput1"
                ],
                "type": 1
              }
            },
            {
              "label": "slot_part_id",
              "type": {
                "displayName": [
                  "equippable_external",
                  "UnequipInput2"
                ],
                "type": 4
              }
            }
          ],
          "docs": [
            " Used to unequip child from parent token.",
            " # Requirements",
            "  * This can only be called by the owner of the token or by an account that has been granted permission to",
            "  * Called on Parent token contract",
            "",
            " # Arguments:",
            "  * `token_id` ID of the token that had an asset unequipped",
            "  * `asset_id` ID of the asset associated with the token we are unequipping from",
            "  * `slot_part_id` ID of the slot we are using to unequip",
            "  * `child_nft` Child NFT tuple (CollectionId, Id)",
            "  * `child_asset_id` ID of the asset associated with the token we are unequipping",
            " Emits an {ChildAssetUnequipped} event."
          ],
          "label": "Equippable::unequip",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "equippable_external",
              "UnequipOutput"
            ],
            "type": 45
          },
          "selector": "0x9d5323ba"
        },
        {
          "args": [
            {
              "label": "equippable_group_id",
              "type": {
                "displayName": [
                  "equippable_external",
                  "SetValidParentForEquippableGroupInput1"
                ],
                "type": 4
              }
            },
            {
              "label": "parent_address",
              "type": {
                "displayName": [
                  "equippable_external",
                  "SetValidParentForEquippableGroupInput2"
                ],
                "type": 8
              }
            },
            {
              "label": "part_id",
              "type": {
                "displayName": [
                  "equippable_external",
                  "SetValidParentForEquippableGroupInput3"
                ],
                "type": 4
              }
            }
          ],
          "docs": [
            " Used to declare that the assets belonging to a given `equippableGroupId` are equippable into the `Slot`",
            " associated with the `partId` of the collection at the specified `parentAddress`",
            " # Requirements",
            "  * Called on Child Token contract",
            "",
            " # Arguments:",
            "  * `equippable_group_id` ID of the equippable group",
            "  * `parent_address` Address of the parent into which the equippable group can be equipped into",
            "  * `part_id` ID of the `Slot` that the items belonging to the equippable group can be equipped into"
          ],
          "label": "Equippable::set_valid_parent_for_equippable_group",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "equippable_external",
              "SetValidParentForEquippableGroupOutput"
            ],
            "type": 45
          },
          "selector": "0x12f1715b"
        }
      ]
    },
    "storage": {
      "struct": {
        "fields": [
          {
            "layout": {
              "struct": {
                "fields": [
                  {
                    "layout": {
                      "cell": {
                        "key": "0x0dbe693b00000000000000000000000000000000000000000000000000000000",
                        "ty": 0
                      }
                    },
                    "name": "token_owner"
                  },
                  {
                    "layout": {
                      "cell": {
                        "key": "0x0ebe693b00000000000000000000000000000000000000000000000000000000",
                        "ty": 12
                      }
                    },
                    "name": "operator_approvals"
                  },
                  {
                    "layout": {
                      "struct": {
                        "fields": [
                          {
                            "layout": {
                              "cell": {
                                "key": "0x4cefab1200000000000000000000000000000000000000000000000000000000",
                                "ty": 18
                              }
                            },
                            "name": "enumerable"
                          },
                          {
                            "layout": {
                              "enum": {
                                "dispatchKey": "0x4defab1200000000000000000000000000000000000000000000000000000000",
                                "variants": {
                                  "0": {
                                    "fields": [
                                      {
                                        "layout": {
                                          "cell": {
                                            "key": "0x4eefab1200000000000000000000000000000000000000000000000000000000",
                                            "ty": 15
                                          }
                                        },
                                        "name": null
                                      }
                                    ]
                                  },
                                  "1": {
                                    "fields": []
                                  }
                                }
                              }
                            },
                            "name": "_reserved"
                          }
                        ]
                      }
                    },
                    "name": "balances"
                  },
                  {
                    "layout": {
                      "enum": {
                        "dispatchKey": "0x0fbe693b00000000000000000000000000000000000000000000000000000000",
                        "variants": {
                          "0": {
                            "fields": [
                              {
                                "layout": {
                                  "cell": {
                                    "key": "0x10be693b00000000000000000000000000000000000000000000000000000000",
                                    "ty": 15
                                  }
                                },
                                "name": null
                              }
                            ]
                          },
                          "1": {
                            "fields": []
                          }
                        }
                      }
                    },
                    "name": "_reserved"
                  }
                ]
              }
            },
            "name": "psp34"
          },
          {
            "layout": {
              "struct": {
                "fields": [
                  {
                    "layout": {
                      "cell": {
                        "key": "0xf9c17de900000000000000000000000000000000000000000000000000000000",
                        "ty": 2
                      }
                    },
                    "name": "status"
                  },
                  {
                    "layout": {
                      "enum": {
                        "dispatchKey": "0xfac17de900000000000000000000000000000000000000000000000000000000",
                        "variants": {
                          "0": {
                            "fields": [
                              {
                                "layout": {
                                  "cell": {
                                    "key": "0xfbc17de900000000000000000000000000000000000000000000000000000000",
                                    "ty": 15
                                  }
                                },
                                "name": null
                              }
                            ]
                          },
                          "1": {
                            "fields": []
                          }
                        }
                      }
                    },
                    "name": "_reserved"
                  }
                ]
              }
            },
            "name": "guard"
          },
          {
            "layout": {
              "struct": {
                "fields": [
                  {
                    "layout": {
                      "cell": {
                        "key": "0xb36ee29c00000000000000000000000000000000000000000000000000000000",
                        "ty": 8
                      }
                    },
                    "name": "owner"
                  },
                  {
                    "layout": {
                      "enum": {
                        "dispatchKey": "0xb46ee29c00000000000000000000000000000000000000000000000000000000",
                        "variants": {
                          "0": {
                            "fields": [
                              {
                                "layout": {
                                  "cell": {
                                    "key": "0xb56ee29c00000000000000000000000000000000000000000000000000000000",
                                    "ty": 15
                                  }
                                },
                                "name": null
                              }
                            ]
                          },
                          "1": {
                            "fields": []
                          }
                        }
                      }
                    },
                    "name": "_reserved"
                  }
                ]
              }
            },
            "name": "ownable"
          },
          {
            "layout": {
              "struct": {
                "fields": [
                  {
                    "layout": {
                      "cell": {
                        "key": "0xc4c906f100000000000000000000000000000000000000000000000000000000",
                        "ty": 22
                      }
                    },
                    "name": "attributes"
                  },
                  {
                    "layout": {
                      "enum": {
                        "dispatchKey": "0xc5c906f100000000000000000000000000000000000000000000000000000000",
                        "variants": {
                          "0": {
                            "fields": [
                              {
                                "layout": {
                                  "cell": {
                                    "key": "0xc6c906f100000000000000000000000000000000000000000000000000000000",
                                    "ty": 15
                                  }
                                },
                                "name": null
                              }
                            ]
                          },
                          "1": {
                            "fields": []
                          }
                        }
                      }
                    },
                    "name": "_reserved"
                  }
                ]
              }
            },
            "name": "metadata"
          },
          {
            "layout": {
              "struct": {
                "fields": [
                  {
                    "layout": {
                      "cell": {
                        "key": "0x5cd983cd00000000000000000000000000000000000000000000000000000000",
                        "ty": 4
                      }
                    },
                    "name": "collection_id"
                  }
                ]
              }
            },
            "name": "utils"
          },
          {
            "layout": {
              "struct": {
                "fields": [
                  {
                    "layout": {
                      "cell": {
                        "key": "0x6d6dfdb300000000000000000000000000000000000000000000000000000000",
                        "ty": 26
                      }
                    },
                    "name": "pending_children"
                  },
                  {
                    "layout": {
                      "cell": {
                        "key": "0x6e6dfdb300000000000000000000000000000000000000000000000000000000",
                        "ty": 26
                      }
                    },
                    "name": "accepted_children"
                  }
                ]
              }
            },
            "name": "nesting"
          },
          {
            "layout": {
              "struct": {
                "fields": [
                  {
                    "layout": {
                      "cell": {
                        "key": "0xbdd75dcb00000000000000000000000000000000000000000000000000000000",
                        "ty": 30
                      }
                    },
                    "name": "collection_asset_entries"
                  },
                  {
                    "layout": {
                      "cell": {
                        "key": "0xbed75dcb00000000000000000000000000000000000000000000000000000000",
                        "ty": 32
                      }
                    },
                    "name": "collection_asset_ids"
                  },
                  {
                    "layout": {
                      "cell": {
                        "key": "0xbfd75dcb00000000000000000000000000000000000000000000000000000000",
                        "ty": 33
                      }
                    },
                    "name": "accepted_assets"
                  },
                  {
                    "layout": {
                      "cell": {
                        "key": "0xc0d75dcb00000000000000000000000000000000000000000000000000000000",
                        "ty": 33
                      }
                    },
                    "name": "pending_assets"
                  }
                ]
              }
            },
            "name": "multiasset"
          },
          {
            "layout": {
              "struct": {
                "fields": [
                  {
                    "layout": {
                      "cell": {
                        "key": "0x125ccf5c00000000000000000000000000000000000000000000000000000000",
                        "ty": 5
                      }
                    },
                    "name": "last_token_id"
                  },
                  {
                    "layout": {
                      "cell": {
                        "key": "0x135ccf5c00000000000000000000000000000000000000000000000000000000",
                        "ty": 5
                      }
                    },
                    "name": "max_supply"
                  },
                  {
                    "layout": {
                      "cell": {
                        "key": "0x145ccf5c00000000000000000000000000000000000000000000000000000000",
                        "ty": 6
                      }
                    },
                    "name": "price_per_mint"
                  },
                  {
                    "layout": {
                      "cell": {
                        "key": "0x155ccf5c00000000000000000000000000000000000000000000000000000000",
                        "ty": 34
                      }
                    },
                    "name": "nft_metadata"
                  }
                ]
              }
            },
            "name": "minting"
          },
          {
            "layout": {
              "struct": {
                "fields": [
                  {
                    "layout": {
                      "cell": {
                        "key": "0xe8307ec300000000000000000000000000000000000000000000000000000000",
                        "ty": 32
                      }
                    },
                    "name": "part_ids"
                  },
                  {
                    "layout": {
                      "cell": {
                        "key": "0xe9307ec300000000000000000000000000000000000000000000000000000000",
                        "ty": 35
                      }
                    },
                    "name": "parts"
                  },
                  {
                    "layout": {
                      "cell": {
                        "key": "0xea307ec300000000000000000000000000000000000000000000000000000000",
                        "ty": 4
                      }
                    },
                    "name": "next_part_id"
                  },
                  {
                    "layout": {
                      "cell": {
                        "key": "0xeb307ec300000000000000000000000000000000000000000000000000000000",
                        "ty": 7
                      }
                    },
                    "name": "base_metadata_uri"
                  }
                ]
              }
            },
            "name": "base"
          },
          {
            "layout": {
              "struct": {
                "fields": [
                  {
                    "layout": {
                      "cell": {
                        "key": "0x9524ef9700000000000000000000000000000000000000000000000000000000",
                        "ty": 40
                      }
                    },
                    "name": "equipment"
                  },
                  {
                    "layout": {
                      "cell": {
                        "key": "0x9624ef9700000000000000000000000000000000000000000000000000000000",
                        "ty": 43
                      }
                    },
                    "name": "valid_parent_slot"
                  }
                ]
              }
            },
            "name": "equippable"
          }
        ]
      }
    },
    "types": [
      {
        "id": 0,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "type": 10
                }
              ]
            }
          },
          "params": [
            {
              "name": "K",
              "type": 1
            },
            {
              "name": "V",
              "type": 8
            }
          ],
          "path": [
            "openbrush_lang",
            "storage",
            "mapping",
            "Mapping"
          ]
        }
      },
      {
        "id": 1,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "fields": [
                    {
                      "type": 2,
                      "typeName": "u8"
                    }
                  ],
                  "index": 0,
                  "name": "U8"
                },
                {
                  "fields": [
                    {
                      "type": 3,
                      "typeName": "u16"
                    }
                  ],
                  "index": 1,
                  "name": "U16"
                },
                {
                  "fields": [
                    {
                      "type": 4,
                      "typeName": "u32"
                    }
                  ],
                  "index": 2,
                  "name": "U32"
                },
                {
                  "fields": [
                    {
                      "type": 5,
                      "typeName": "u64"
                    }
                  ],
                  "index": 3,
                  "name": "U64"
                },
                {
                  "fields": [
                    {
                      "type": 6,
                      "typeName": "u128"
                    }
                  ],
                  "index": 4,
                  "name": "U128"
                },
                {
                  "fields": [
                    {
                      "type": 7,
                      "typeName": "Vec<u8>"
                    }
                  ],
                  "index": 5,
                  "name": "Bytes"
                }
              ]
            }
          },
          "path": [
            "openbrush_contracts",
            "traits",
            "types",
            "Id"
          ]
        }
      },
      {
        "id": 2,
        "type": {
          "def": {
            "primitive": "u8"
          }
        }
      },
      {
        "id": 3,
        "type": {
          "def": {
            "primitive": "u16"
          }
        }
      },
      {
        "id": 4,
        "type": {
          "def": {
            "primitive": "u32"
          }
        }
      },
      {
        "id": 5,
        "type": {
          "def": {
            "primitive": "u64"
          }
        }
      },
      {
        "id": 6,
        "type": {
          "def": {
            "primitive": "u128"
          }
        }
      },
      {
        "id": 7,
        "type": {
          "def": {
            "sequence": {
              "type": 2
            }
          }
        }
      },
      {
        "id": 8,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "type": 9,
                  "typeName": "[u8; 32]"
                }
              ]
            }
          },
          "path": [
            "ink_env",
            "types",
            "AccountId"
          ]
        }
      },
      {
        "id": 9,
        "type": {
          "def": {
            "array": {
              "len": 32,
              "type": 2
            }
          }
        }
      },
      {
        "id": 10,
        "type": {
          "def": {
            "sequence": {
              "type": 11
            }
          }
        }
      },
      {
        "id": 11,
        "type": {
          "def": {
            "tuple": [
              1,
              8
            ]
          }
        }
      },
      {
        "id": 12,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "type": 16
                }
              ]
            }
          },
          "params": [
            {
              "name": "K",
              "type": 13
            },
            {
              "name": "V",
              "type": 15
            }
          ],
          "path": [
            "openbrush_lang",
            "storage",
            "mapping",
            "Mapping"
          ]
        }
      },
      {
        "id": 13,
        "type": {
          "def": {
            "tuple": [
              8,
              8,
              14
            ]
          }
        }
      },
      {
        "id": 14,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "index": 0,
                  "name": "None"
                },
                {
                  "fields": [
                    {
                      "type": 1
                    }
                  ],
                  "index": 1,
                  "name": "Some"
                }
              ]
            }
          },
          "params": [
            {
              "name": "T",
              "type": 1
            }
          ],
          "path": [
            "Option"
          ]
        }
      },
      {
        "id": 15,
        "type": {
          "def": {
            "tuple": []
          }
        }
      },
      {
        "id": 16,
        "type": {
          "def": {
            "sequence": {
              "type": 17
            }
          }
        }
      },
      {
        "id": 17,
        "type": {
          "def": {
            "tuple": [
              13,
              15
            ]
          }
        }
      },
      {
        "id": 18,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "type": 20
                }
              ]
            }
          },
          "params": [
            {
              "name": "K",
              "type": 19
            },
            {
              "name": "V",
              "type": 1
            }
          ],
          "path": [
            "openbrush_lang",
            "storage",
            "multi_mapping",
            "MultiMapping"
          ]
        }
      },
      {
        "id": 19,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "index": 0,
                  "name": "None"
                },
                {
                  "fields": [
                    {
                      "type": 8
                    }
                  ],
                  "index": 1,
                  "name": "Some"
                }
              ]
            }
          },
          "params": [
            {
              "name": "T",
              "type": 8
            }
          ],
          "path": [
            "Option"
          ]
        }
      },
      {
        "id": 20,
        "type": {
          "def": {
            "sequence": {
              "type": 21
            }
          }
        }
      },
      {
        "id": 21,
        "type": {
          "def": {
            "tuple": [
              19,
              1
            ]
          }
        }
      },
      {
        "id": 22,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "type": 24
                }
              ]
            }
          },
          "params": [
            {
              "name": "K",
              "type": 23
            },
            {
              "name": "V",
              "type": 7
            }
          ],
          "path": [
            "openbrush_lang",
            "storage",
            "mapping",
            "Mapping"
          ]
        }
      },
      {
        "id": 23,
        "type": {
          "def": {
            "tuple": [
              1,
              7
            ]
          }
        }
      },
      {
        "id": 24,
        "type": {
          "def": {
            "sequence": {
              "type": 25
            }
          }
        }
      },
      {
        "id": 25,
        "type": {
          "def": {
            "tuple": [
              23,
              7
            ]
          }
        }
      },
      {
        "id": 26,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "name": "offset_key",
                  "type": 29,
                  "typeName": "Key"
                }
              ]
            }
          },
          "params": [
            {
              "name": "K",
              "type": 1
            },
            {
              "name": "V",
              "type": 27
            }
          ],
          "path": [
            "ink_storage",
            "lazy",
            "mapping",
            "Mapping"
          ]
        }
      },
      {
        "id": 27,
        "type": {
          "def": {
            "sequence": {
              "type": 28
            }
          }
        }
      },
      {
        "id": 28,
        "type": {
          "def": {
            "tuple": [
              8,
              1
            ]
          }
        }
      },
      {
        "id": 29,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "type": 9,
                  "typeName": "[u8; 32]"
                }
              ]
            }
          },
          "path": [
            "ink_primitives",
            "Key"
          ]
        }
      },
      {
        "id": 30,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "name": "offset_key",
                  "type": 29,
                  "typeName": "Key"
                }
              ]
            }
          },
          "params": [
            {
              "name": "K",
              "type": 4
            },
            {
              "name": "V",
              "type": 31
            }
          ],
          "path": [
            "ink_storage",
            "lazy",
            "mapping",
            "Mapping"
          ]
        }
      },
      {
        "id": 31,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "name": "equippable_group_id",
                  "type": 4,
                  "typeName": "EquippableGroupId"
                },
                {
                  "name": "asset_uri",
                  "type": 7,
                  "typeName": "String"
                },
                {
                  "name": "part_ids",
                  "type": 32,
                  "typeName": "Vec<PartId>"
                }
              ]
            }
          },
          "path": [
            "rmrk",
            "impls",
            "rmrk",
            "types",
            "Asset"
          ]
        }
      },
      {
        "id": 32,
        "type": {
          "def": {
            "sequence": {
              "type": 4
            }
          }
        }
      },
      {
        "id": 33,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "name": "offset_key",
                  "type": 29,
                  "typeName": "Key"
                }
              ]
            }
          },
          "params": [
            {
              "name": "K",
              "type": 1
            },
            {
              "name": "V",
              "type": 32
            }
          ],
          "path": [
            "ink_storage",
            "lazy",
            "mapping",
            "Mapping"
          ]
        }
      },
      {
        "id": 34,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "name": "offset_key",
                  "type": 29,
                  "typeName": "Key"
                }
              ]
            }
          },
          "params": [
            {
              "name": "K",
              "type": 1
            },
            {
              "name": "V",
              "type": 7
            }
          ],
          "path": [
            "ink_storage",
            "lazy",
            "mapping",
            "Mapping"
          ]
        }
      },
      {
        "id": 35,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "name": "offset_key",
                  "type": 29,
                  "typeName": "Key"
                }
              ]
            }
          },
          "params": [
            {
              "name": "K",
              "type": 4
            },
            {
              "name": "V",
              "type": 36
            }
          ],
          "path": [
            "ink_storage",
            "lazy",
            "mapping",
            "Mapping"
          ]
        }
      },
      {
        "id": 36,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "name": "part_type",
                  "type": 37,
                  "typeName": "PartType"
                },
                {
                  "name": "z",
                  "type": 2,
                  "typeName": "u8"
                },
                {
                  "name": "equippable",
                  "type": 38,
                  "typeName": "Vec<AccountId>"
                },
                {
                  "name": "metadata_uri",
                  "type": 7,
                  "typeName": "String"
                },
                {
                  "name": "is_equippable_by_all",
                  "type": 39,
                  "typeName": "bool"
                }
              ]
            }
          },
          "path": [
            "rmrk",
            "impls",
            "rmrk",
            "types",
            "Part"
          ]
        }
      },
      {
        "id": 37,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "index": 0,
                  "name": "None"
                },
                {
                  "index": 1,
                  "name": "Slot"
                },
                {
                  "index": 2,
                  "name": "Fixed"
                }
              ]
            }
          },
          "path": [
            "rmrk",
            "impls",
            "rmrk",
            "types",
            "PartType"
          ]
        }
      },
      {
        "id": 38,
        "type": {
          "def": {
            "sequence": {
              "type": 8
            }
          }
        }
      },
      {
        "id": 39,
        "type": {
          "def": {
            "primitive": "bool"
          }
        }
      },
      {
        "id": 40,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "name": "offset_key",
                  "type": 29,
                  "typeName": "Key"
                }
              ]
            }
          },
          "params": [
            {
              "name": "K",
              "type": 41
            },
            {
              "name": "V",
              "type": 42
            }
          ],
          "path": [
            "ink_storage",
            "lazy",
            "mapping",
            "Mapping"
          ]
        }
      },
      {
        "id": 41,
        "type": {
          "def": {
            "tuple": [
              1,
              4
            ]
          }
        }
      },
      {
        "id": 42,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "name": "asset_id",
                  "type": 4,
                  "typeName": "AssetId"
                },
                {
                  "name": "child_asset_id",
                  "type": 4,
                  "typeName": "AssetId"
                },
                {
                  "name": "child_nft",
                  "type": 28,
                  "typeName": "ChildNft"
                }
              ]
            }
          },
          "path": [
            "rmrk",
            "impls",
            "rmrk",
            "types",
            "Equipment"
          ]
        }
      },
      {
        "id": 43,
        "type": {
          "def": {
            "composite": {
              "fields": [
                {
                  "name": "offset_key",
                  "type": 29,
                  "typeName": "Key"
                }
              ]
            }
          },
          "params": [
            {
              "name": "K",
              "type": 44
            },
            {
              "name": "V",
              "type": 4
            }
          ],
          "path": [
            "ink_storage",
            "lazy",
            "mapping",
            "Mapping"
          ]
        }
      },
      {
        "id": 44,
        "type": {
          "def": {
            "tuple": [
              4,
              8
            ]
          }
        }
      },
      {
        "id": 45,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "fields": [
                    {
                      "type": 15
                    }
                  ],
                  "index": 0,
                  "name": "Ok"
                },
                {
                  "fields": [
                    {
                      "type": 46
                    }
                  ],
                  "index": 1,
                  "name": "Err"
                }
              ]
            }
          },
          "params": [
            {
              "name": "T",
              "type": 15
            },
            {
              "name": "E",
              "type": 46
            }
          ],
          "path": [
            "Result"
          ]
        }
      },
      {
        "id": 46,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "fields": [
                    {
                      "type": 7,
                      "typeName": "String"
                    }
                  ],
                  "index": 0,
                  "name": "Custom"
                },
                {
                  "index": 1,
                  "name": "SelfApprove"
                },
                {
                  "index": 2,
                  "name": "NotApproved"
                },
                {
                  "index": 3,
                  "name": "TokenExists"
                },
                {
                  "index": 4,
                  "name": "TokenNotExists"
                },
                {
                  "fields": [
                    {
                      "type": 7,
                      "typeName": "String"
                    }
                  ],
                  "index": 5,
                  "name": "SafeTransferCheckFailed"
                }
              ]
            }
          },
          "path": [
            "openbrush_contracts",
            "traits",
            "errors",
            "psp34",
            "PSP34Error"
          ]
        }
      },
      {
        "id": 47,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "fields": [
                    {
                      "type": 15
                    }
                  ],
                  "index": 0,
                  "name": "Ok"
                },
                {
                  "fields": [
                    {
                      "type": 48
                    }
                  ],
                  "index": 1,
                  "name": "Err"
                }
              ]
            }
          },
          "params": [
            {
              "name": "T",
              "type": 15
            },
            {
              "name": "E",
              "type": 48
            }
          ],
          "path": [
            "Result"
          ]
        }
      },
      {
        "id": 48,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "index": 0,
                  "name": "CallerIsNotOwner"
                },
                {
                  "index": 1,
                  "name": "NewOwnerIsZero"
                }
              ]
            }
          },
          "path": [
            "openbrush_contracts",
            "traits",
            "errors",
            "ownable",
            "OwnableError"
          ]
        }
      },
      {
        "id": 49,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "index": 0,
                  "name": "None"
                },
                {
                  "fields": [
                    {
                      "type": 7
                    }
                  ],
                  "index": 1,
                  "name": "Some"
                }
              ]
            }
          },
          "params": [
            {
              "name": "T",
              "type": 7
            }
          ],
          "path": [
            "Option"
          ]
        }
      },
      {
        "id": 50,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "fields": [
                    {
                      "type": 1
                    }
                  ],
                  "index": 0,
                  "name": "Ok"
                },
                {
                  "fields": [
                    {
                      "type": 46
                    }
                  ],
                  "index": 1,
                  "name": "Err"
                }
              ]
            }
          },
          "params": [
            {
              "name": "T",
              "type": 1
            },
            {
              "name": "E",
              "type": 46
            }
          ],
          "path": [
            "Result"
          ]
        }
      },
      {
        "id": 51,
        "type": {
          "def": {
            "primitive": "str"
          }
        }
      },
      {
        "id": 52,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "fields": [
                    {
                      "type": 51
                    }
                  ],
                  "index": 0,
                  "name": "Ok"
                },
                {
                  "fields": [
                    {
                      "type": 46
                    }
                  ],
                  "index": 1,
                  "name": "Err"
                }
              ]
            }
          },
          "params": [
            {
              "name": "T",
              "type": 51
            },
            {
              "name": "E",
              "type": 46
            }
          ],
          "path": [
            "Result"
          ]
        }
      },
      {
        "id": 53,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "fields": [
                    {
                      "type": 54
                    }
                  ],
                  "index": 0,
                  "name": "Ok"
                },
                {
                  "fields": [
                    {
                      "type": 46
                    }
                  ],
                  "index": 1,
                  "name": "Err"
                }
              ]
            }
          },
          "params": [
            {
              "name": "T",
              "type": 54
            },
            {
              "name": "E",
              "type": 46
            }
          ],
          "path": [
            "Result"
          ]
        }
      },
      {
        "id": 54,
        "type": {
          "def": {
            "tuple": [
              5,
              5
            ]
          }
        }
      },
      {
        "id": 55,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "fields": [
                    {
                      "type": 56
                    }
                  ],
                  "index": 0,
                  "name": "Ok"
                },
                {
                  "fields": [
                    {
                      "type": 46
                    }
                  ],
                  "index": 1,
                  "name": "Err"
                }
              ]
            }
          },
          "params": [
            {
              "name": "T",
              "type": 56
            },
            {
              "name": "E",
              "type": 46
            }
          ],
          "path": [
            "Result"
          ]
        }
      },
      {
        "id": 56,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "index": 0,
                  "name": "None"
                },
                {
                  "fields": [
                    {
                      "type": 32
                    }
                  ],
                  "index": 1,
                  "name": "Some"
                }
              ]
            }
          },
          "params": [
            {
              "name": "T",
              "type": 32
            }
          ],
          "path": [
            "Option"
          ]
        }
      },
      {
        "id": 57,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "index": 0,
                  "name": "None"
                },
                {
                  "fields": [
                    {
                      "type": 36
                    }
                  ],
                  "index": 1,
                  "name": "Some"
                }
              ]
            }
          },
          "params": [
            {
              "name": "T",
              "type": 36
            }
          ],
          "path": [
            "Option"
          ]
        }
      },
      {
        "id": 58,
        "type": {
          "def": {
            "sequence": {
              "type": 36
            }
          }
        }
      },
      {
        "id": 59,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "fields": [
                    {
                      "type": 42
                    }
                  ],
                  "index": 0,
                  "name": "Ok"
                },
                {
                  "fields": [
                    {
                      "type": 46
                    }
                  ],
                  "index": 1,
                  "name": "Err"
                }
              ]
            }
          },
          "params": [
            {
              "name": "T",
              "type": 42
            },
            {
              "name": "E",
              "type": 46
            }
          ],
          "path": [
            "Result"
          ]
        }
      },
      {
        "id": 60,
        "type": {
          "def": {
            "variant": {
              "variants": [
                {
                  "fields": [
                    {
                      "type": 31
                    }
                  ],
                  "index": 0,
                  "name": "Ok"
                },
                {
                  "fields": [
                    {
                      "type": 46
                    }
                  ],
                  "index": 1,
                  "name": "Err"
                }
              ]
            }
          },
          "params": [
            {
              "name": "T",
              "type": 31
            },
            {
              "name": "E",
              "type": 46
            }
          ],
          "path": [
            "Result"
          ]
        }
      }
    ]
  }
}

const _abi = new Abi(metadata)

export function decodeEvent(hex: string): Event {
    return _abi.decodeEvent(hex)
}

export function decodeMessage(hex: string): Message {
    return _abi.decodeMessage(hex)
}

export function decodeConstructor(hex: string): Constructor {
    return _abi.decodeConstructor(hex)
}

export type Event = Event_Transfer | Event_Approval | Event_ChildAdded | Event_ChildAccepted | Event_ChildRemoved | Event_ChildRejected | Event_AssetSet | Event_AssetAddedToToken | Event_AssetAccepted | Event_AssetRejected | Event_AssetRemoved | Event_AssetPrioritySet | Event_AssetEquipped | Event_AssetUnEquipped | Event_ParentEquippableGroupSet

export interface Event_Transfer {
    __kind: 'Transfer'
    from: (Uint8Array | undefined)
    to: (Uint8Array | undefined)
    id: Id
}

export interface Event_Approval {
    __kind: 'Approval'
    from: Uint8Array
    to: Uint8Array
    id: (Id | undefined)
    approved: boolean
}

export interface Event_ChildAdded {
    __kind: 'ChildAdded'
    to: Id
    collection: Uint8Array
    child: Id
}

export interface Event_ChildAccepted {
    __kind: 'ChildAccepted'
    parent: Id
    collection: Uint8Array
    child: Id
}

export interface Event_ChildRemoved {
    __kind: 'ChildRemoved'
    parent: Id
    childCollection: Uint8Array
    childTokenId: Id
}

export interface Event_ChildRejected {
    __kind: 'ChildRejected'
    parent: Id
    childCollection: Uint8Array
    childTokenId: Id
}

export interface Event_AssetSet {
    __kind: 'AssetSet'
    asset: number
}

export interface Event_AssetAddedToToken {
    __kind: 'AssetAddedToToken'
    token: Id
    asset: number
    replaces: (Id | undefined)
}

export interface Event_AssetAccepted {
    __kind: 'AssetAccepted'
    token: Id
    asset: number
}

export interface Event_AssetRejected {
    __kind: 'AssetRejected'
    token: Id
    asset: number
}

export interface Event_AssetRemoved {
    __kind: 'AssetRemoved'
    token: Id
    asset: number
}

export interface Event_AssetPrioritySet {
    __kind: 'AssetPrioritySet'
    token: Id
    priorities: number[]
}

export interface Event_AssetEquipped {
    __kind: 'AssetEquipped'
    token: Id
    asset: number
    child: Id
    childAsset: number
}

export interface Event_AssetUnEquipped {
    __kind: 'AssetUnEquipped'
    token: Id
    asset: number
    slot: number
}

export interface Event_ParentEquippableGroupSet {
    __kind: 'ParentEquippableGroupSet'
    group: number
    slot: number
    parent: Uint8Array
}

export type Message = Message_PSP34_collection_id | Message_PSP34_owner_of | Message_PSP34_allowance | Message_PSP34_approve | Message_PSP34_balance_of | Message_PSP34_total_supply | Message_PSP34_transfer | Message_Ownable_owner | Message_Ownable_renounce_ownership | Message_Ownable_transfer_ownership | Message_PSP34Metadata_get_attribute | Message_PSP34Enumerable_token_by_index | Message_PSP34Enumerable_owners_token_by_index | Message_Utils_max_supply | Message_Utils_price | Message_Utils_set_base_uri | Message_Utils_token_uri | Message_Utils_withdraw | Message_Minting_mint | Message_Minting_mint_with_metadata | Message_Minting_mint_next | Message_Nesting_children_balance | Message_Nesting_add_child | Message_Nesting_reject_child | Message_Nesting_transfer_child | Message_Nesting_remove_child | Message_Nesting_accept_child | Message_MultiAsset_total_token_assets | Message_MultiAsset_get_accepted_token_assets | Message_MultiAsset_remove_asset | Message_MultiAsset_set_priority | Message_MultiAsset_add_asset_to_token | Message_MultiAsset_add_asset_entry | Message_MultiAsset_get_asset_uri | Message_MultiAsset_reject_asset | Message_MultiAsset_total_assets | Message_MultiAsset_accept_asset | Message_Base_reset_equippable_addresses | Message_Base_setup_base | Message_Base_is_equippable_by_all | Message_Base_get_part | Message_Base_add_part_list | Message_Base_set_equippable_by_all | Message_Base_get_base_metadata | Message_Base_ensure_equippable | Message_Base_add_equippable_addresses | Message_Base_get_parts_count | Message_Equippable_get_equipment | Message_Equippable_equip | Message_Equippable_get_asset_and_equippable_data | Message_Equippable_unequip | Message_Equippable_set_valid_parent_for_equippable_group

/**
 *  Returns the collection `Id` of the NFT token.
 * 
 *  This can represents the relationship between tokens/contracts/pallets.
 */
export interface Message_PSP34_collection_id {
    __kind: 'PSP34_collection_id'
}

/**
 *  Returns the owner of the token if any.
 */
export interface Message_PSP34_owner_of {
    __kind: 'PSP34_owner_of'
    id: Id
}

/**
 *  Returns `true` if the operator is approved by the owner to withdraw `id` token.
 *  If `id` is `None`, returns `true` if the operator is approved to withdraw all owner's tokens.
 */
export interface Message_PSP34_allowance {
    __kind: 'PSP34_allowance'
    owner: Uint8Array
    operator: Uint8Array
    id: (Id | undefined)
}

/**
 *  Approves `operator` to withdraw the `id` token from the caller's account.
 *  If `id` is `None` approves or disapproves the operator for all tokens of the caller.
 * 
 *  On success a `Approval` event is emitted.
 * 
 *  # Errors
 * 
 *  Returns `SelfApprove` error if it is self approve.
 * 
 *  Returns `NotApproved` error if caller is not owner of `id`.
 */
export interface Message_PSP34_approve {
    __kind: 'PSP34_approve'
    operator: Uint8Array
    id: (Id | undefined)
    approved: boolean
}

/**
 *  Returns the balance of the owner.
 * 
 *  This represents the amount of unique tokens the owner has.
 */
export interface Message_PSP34_balance_of {
    __kind: 'PSP34_balance_of'
    owner: Uint8Array
}

/**
 *  Returns current NFT total supply.
 */
export interface Message_PSP34_total_supply {
    __kind: 'PSP34_total_supply'
}

/**
 *  Transfer approved or owned token from caller.
 * 
 *  On success a `Transfer` event is emitted.
 * 
 *  # Errors
 * 
 *  Returns `TokenNotExists` error if `id` does not exist.
 * 
 *  Returns `NotApproved` error if `from` doesn't have allowance for transferring.
 * 
 *  Returns `SafeTransferCheckFailed` error if `to` doesn't accept transfer.
 */
export interface Message_PSP34_transfer {
    __kind: 'PSP34_transfer'
    to: Uint8Array
    id: Id
    data: Uint8Array
}

/**
 *  Returns the address of the current owner.
 */
export interface Message_Ownable_owner {
    __kind: 'Ownable_owner'
}

/**
 *  Leaves the contract without owner. It will not be possible to call
 *  owner's functions anymore. Can only be called by the current owner.
 * 
 *  NOTE: Renouncing ownership will leave the contract without an owner,
 *  thereby removing any functionality that is only available to the owner.
 * 
 *  On success a `OwnershipTransferred` event is emitted.
 * 
 *  # Errors
 * 
 *  Panics with `CallerIsNotOwner` error if caller is not owner
 */
export interface Message_Ownable_renounce_ownership {
    __kind: 'Ownable_renounce_ownership'
}

/**
 *  Transfers ownership of the contract to a `new_owner`.
 *  Can only be called by the current owner.
 * 
 *  On success a `OwnershipTransferred` event is emitted.
 * 
 *  # Errors
 * 
 *  Panics with `CallerIsNotOwner` error if caller is not owner.
 * 
 *  Panics with `NewOwnerIsZero` error if new owner's address is zero.
 */
export interface Message_Ownable_transfer_ownership {
    __kind: 'Ownable_transfer_ownership'
    newOwner: Uint8Array
}

/**
 *  Returns the attribute of `id` for the given `key`.
 * 
 *  If `id` is a collection id of the token, it returns attributes for collection.
 */
export interface Message_PSP34Metadata_get_attribute {
    __kind: 'PSP34Metadata_get_attribute'
    id: Id
    key: Uint8Array
}

/**
 *  Returns a token `Id` at a given `index` of all the tokens stored by the contract.
 *  Use along with `total_supply` to enumerate all tokens.
 * 
 *  The start index is zero.
 */
export interface Message_PSP34Enumerable_token_by_index {
    __kind: 'PSP34Enumerable_token_by_index'
    index: bigint
}

/**
 *  Returns a token `Id` owned by `owner` at a given `index` of its token list.
 *  Use along with `balance_of` to enumerate all of ``owner``'s tokens.
 * 
 *  The start index is zero.
 */
export interface Message_PSP34Enumerable_owners_token_by_index {
    __kind: 'PSP34Enumerable_owners_token_by_index'
    owner: Uint8Array
    index: bigint
}

/**
 *  Get max supply of tokens.
 */
export interface Message_Utils_max_supply {
    __kind: 'Utils_max_supply'
}

/**
 *  Get token mint price.
 */
export interface Message_Utils_price {
    __kind: 'Utils_price'
}

/**
 *  Set new value for the baseUri.
 */
export interface Message_Utils_set_base_uri {
    __kind: 'Utils_set_base_uri'
    uri: string
}

/**
 *  Get URI for the token Id.
 */
export interface Message_Utils_token_uri {
    __kind: 'Utils_token_uri'
    tokenId: bigint
}

/**
 *  Withdraw contract's balance.
 */
export interface Message_Utils_withdraw {
    __kind: 'Utils_withdraw'
}

/**
 *  Mint one or more tokens.
 */
export interface Message_Minting_mint {
    __kind: 'Minting_mint'
    to: Uint8Array
    mintAmount: bigint
}

/**
 *  Mint next available token with specific metadata
 */
export interface Message_Minting_mint_with_metadata {
    __kind: 'Minting_mint_with_metadata'
    metadata: string
    to: Uint8Array
}

/**
 *  Mint next available token for the caller.
 */
export interface Message_Minting_mint_next {
    __kind: 'Minting_mint_next'
}

/**
 *  Read the number of children on the parent token.
 *  # Arguments:
 *  * `parent_token_id`: parent tokenId to check
 * 
 *  # Result:
 *  Returns the tupple of `(accepted_children, pending_children)` count
 */
export interface Message_Nesting_children_balance {
    __kind: 'Nesting_children_balance'
    parentTokenId: Id
}

/**
 *  Add a child NFT (from different collection) to the NFT in this collection.
 *  The status of the added child is `Pending` if caller is not owner of child NFT
 *  The status of the added child is `Accepted` if caller is is owner of child NFT
 *  The caller needs not to be the owner of the to_parent_token_id, but
 *  Caller must be owner of the child NFT,
 *  in order to perform transfer() ownership of the child nft to to_parent_token_id.
 * 
 *  # Requirements:
 *  * `child_contract_address` needs to be added by collecion owner
 *  * `to_parent_token_id` must exist.
 *  * `child_token_id` must exist.
 *  * There cannot be two identical children.
 * 
 *  # Arguments:
 *  * `to_parent_token_id`: is the tokenId of the parent NFT. The receiver of child.
 *  * `child_nft`: (collection_id, token_id) of the child instance.
 * 
 *  # Result:
 *  Ownership of child NFT will be transferred to this contract (cross contract call)
 *  On success emitts `RmrkEvent::ChildAdded`
 *  On success emitts `RmrkEvent::ChildAccepted` - only if caller is already owner of child NFT
 */
export interface Message_Nesting_add_child {
    __kind: 'Nesting_add_child'
    parentTokenId: Id
    childNft: [Uint8Array, Id]
}

/**
 *  Reject a child NFT (from different collection).
 * 
 *  # Requirements:
 *  * The status of the child is `Pending`
 * 
 *  # Arguments:
 *  * `parent_token_id`: is the tokenId of the parent NFT.
 *  * `child_nft`: (collection_id, token_id) of the child instance.
 * 
 *  # Result:
 *  Child Nft is removed from pending
 *  On success emitts `RmrkEvent::ChildRejected`
 */
export interface Message_Nesting_reject_child {
    __kind: 'Nesting_reject_child'
    parentTokenId: Id
    childNft: [Uint8Array, Id]
}

/**
 *  Transfer the child NFT from one parent to another (in this collection).
 * 
 *  # Requirements:
 *  * The status of the child is `Accepted`
 * 
 *  # Arguments:
 *  * `current_parent`: current parent tokenId which holds child nft
 *  * `new_parent`: new parent tokenId which will hold child nft
 *  * `child_nft`: (collection_id, token_id) of the child instance.
 * 
 *  # Result:
 *  Ownership of child NFT will be transferred to this contract (cross contract call)
 *  On success emitts `RmrkEvent::ChildAdded`
 *  On success emitts `RmrkEvent::ChildAccepted` - only if caller is already owner of child NFT
 */
export interface Message_Nesting_transfer_child {
    __kind: 'Nesting_transfer_child'
    from: Id
    to: Id
    childNft: [Uint8Array, Id]
}

/**
 *  Remove a child NFT (from different collection) from token_id in this collection.
 *  The status of added child is `Pending` if caller is not owner of child NFT
 *  The status of added child is `Accepted` if caller is is owner of child NFT
 * 
 *  # Requirements:
 *  * The status of the child is `Accepted`
 * 
 *  # Arguments:
 *  * `parent_token_id`: is the tokenId of the parent NFT.
 *  * `child_nft`: (collection_id, token_id) of the child instance.
 * 
 *  # Result:
 *  Ownership of child NFT will be transferred to parent NFT owner (cross contract call)
 *  On success emitts `RmrkEvent::ChildRemoved`
 */
export interface Message_Nesting_remove_child {
    __kind: 'Nesting_remove_child'
    parentTokenId: Id
    childNft: [Uint8Array, Id]
}

/**
 *  Accept a child NFT (from different collection) to be owned by parent token.
 * 
 *  # Requirements:
 *  * The status of the child is `Pending`
 * 
 *  # Arguments:
 *  * `parent_token_id`: is the tokenId of the parent NFT.
 *  * `child_nft`: (collection_id, token_id) of the child instance.
 * 
 *  # Result:
 *  Child Nft is moved from pending to accepted
 *  On success emitts `RmrkEvent::ChildAccepted`
 */
export interface Message_Nesting_accept_child {
    __kind: 'Nesting_accept_child'
    parentTokenId: Id
    childNft: [Uint8Array, Id]
}

/**
 *  Used to retrieve the total number of assets per token
 */
export interface Message_MultiAsset_total_token_assets {
    __kind: 'MultiAsset_total_token_assets'
    tokenId: Id
}

/**
 *  Fetch all accepted assets for the token_id
 */
export interface Message_MultiAsset_get_accepted_token_assets {
    __kind: 'MultiAsset_get_accepted_token_assets'
    tokenId: Id
}

/**
 *  Remove the assets for the list of token assets
 */
export interface Message_MultiAsset_remove_asset {
    __kind: 'MultiAsset_remove_asset'
    tokenId: Id
    assetId: number
}

/**
 *  Used to specify the priorities for a given token's active assets.
 *  If the length of the priorities array doesn't match the length of the active assets array, the execution
 *   will be reverted.
 *  The position of the priority value in the array corresponds the position of the asset in the active
 *   assets array it will be applied to.
 *  # Arguments
 *   * tokenId ID of the token for which the priorities are being set
 *   * priorities Array of priorities for the assets
 *  Emits a {AssetPrioritySet} event.
 */
export interface Message_MultiAsset_set_priority {
    __kind: 'MultiAsset_set_priority'
    tokenId: Id
    priorities: number[]
}

/**
 *  Used to add an asset to a token.
 *  If the given asset is already added to the token, the execution will be reverted.
 *  If the asset ID is invalid, the execution will be reverted.
 *  If the token already has the maximum amount of pending assets (128), the execution will be
 *  reverted.
 *  If the asset is being added by the current root owner of the token, the asset will be automatically
 *  accepted.
 *  # Arguments
 *   * tokenId ID of the token to add the asset to
 *   * assetId ID of the asset to add to the token
 *   * replacesAssetWithId ID of the asset to replace from the token's list of active assets
 *  Emits an {AssetAddedToToken} event.
 */
export interface Message_MultiAsset_add_asset_to_token {
    __kind: 'MultiAsset_add_asset_to_token'
    tokenId: Id
    assetId: number
    replacesAssetWithId: (Id | undefined)
}

/**
 *  Used to add a asset entry.
 *  The ID of the asset is automatically assigned to be the next available asset ID.
 *  # Arguments
 *   * `asset_uri` Uri for the new asset
 *  Emits an {AssetSet} event.
 */
export interface Message_MultiAsset_add_asset_entry {
    __kind: 'MultiAsset_add_asset_entry'
    id: number
    equippableGroupId: number
    assetUri: Uint8Array
    partIds: number[]
}

/**
 *  Used to retrieve asset's uri
 */
export interface Message_MultiAsset_get_asset_uri {
    __kind: 'MultiAsset_get_asset_uri'
    assetId: number
}

/**
 *  Rejects an asset from the pending array of given token.
 *  Removes the asset from the token's pending asset array.
 *  # Requirements:
 *   * The caller must own the token or be approved to manage the token's assets
 *   * `tokenId` must exist.
 *   * `assetId` must be in the pending_asset list.
 *  # Arguments
 *   * tokenId ID of the token for which to accept the pending asset
 *   * assetId ID of the asset expected to be in the pending_asset list.
 *  Emits a {AssetRejected} event.
 */
export interface Message_MultiAsset_reject_asset {
    __kind: 'MultiAsset_reject_asset'
    tokenId: Id
    assetId: number
}

/**
 *  Used to retrieve the total number of assets.
 *  # Returns
 *   * u64 The total number of assets
 */
export interface Message_MultiAsset_total_assets {
    __kind: 'MultiAsset_total_assets'
}

/**
 *  Accepts an asset at from the pending array of given token.
 *  Migrates the asset from the token's pending asset array to the token's active asset array.
 *  Active assets cannot be removed by anyone, but can be replaced by a new asset.
 *  # Requirements:
 *   * The caller must own the token or be approved to manage the token's assets
 *   * `tokenId` must exist.
 *   * `assetId` must be in the pending_asset list.
 *  # Arguments
 *   * tokenId ID of the token for which to accept the pending asset
 *   * assetId ID of the asset expected to be in the pending_asset list.
 *  Emits an {AssetAccepted} event.
 */
export interface Message_MultiAsset_accept_asset {
    __kind: 'MultiAsset_accept_asset'
    tokenId: Id
    assetId: number
}

/**
 *  Remove list of equippable addresses for given Part
 */
export interface Message_Base_reset_equippable_addresses {
    __kind: 'Base_reset_equippable_addresses'
    partId: number
}

export interface Message_Base_setup_base {
    __kind: 'Base_setup_base'
    baseMetadata: Uint8Array
}

/**
 *  Checks if the given `PartId` can be equipped by any collection
 */
export interface Message_Base_is_equippable_by_all {
    __kind: 'Base_is_equippable_by_all'
    partId: number
}

/**
 *  Get the part details for the given PartId.
 */
export interface Message_Base_get_part {
    __kind: 'Base_get_part'
    partId: number
}

/**
 *  Add one or more parts to the base
 */
export interface Message_Base_add_part_list {
    __kind: 'Base_add_part_list'
    parts: AddPartListInput1
}

/**
 *  Sets the is_equippable_by_all flag to true, meaning that any collection may be equipped into the `PartId`
 */
export interface Message_Base_set_equippable_by_all {
    __kind: 'Base_set_equippable_by_all'
    partId: number
}

export interface Message_Base_get_base_metadata {
    __kind: 'Base_get_base_metadata'
}

/**
 *  Check whether the given address is allowed to equip the desired `PartId`.
 */
export interface Message_Base_ensure_equippable {
    __kind: 'Base_ensure_equippable'
    partId: number
    targetAddress: Uint8Array
}

/**
 *  Add collection address(es) that can be used to equip given `PartId`.
 */
export interface Message_Base_add_equippable_addresses {
    __kind: 'Base_add_equippable_addresses'
    partId: number
    equippableAddress: AddEquippableAddressesInput2
}

/**
 *  Get the list of all parts.
 */
export interface Message_Base_get_parts_count {
    __kind: 'Base_get_parts_count'
}

/**
 *  Used to extend already added Asset with details needed to support equipping.
 *  These details are not present in MultiAsset trait to avoid dependencies on Equippable trait.
 *  # Arguments:
 *   * `asset_id` ID of the asset being extended
 *   * `equippableGroupId` ID of the equippable group
 *   * `partIds` An array of IDs of fixed and slot parts to be included in the asset
 *  Used to get the Equipment object equipped into the specified slot of the desired token.
 * 
 *  # Arguments:
 *   * `token_id` ID of the token for which we are retrieving the equipped object
 *   * `slot_part_id` ID of the `Slot` part that we are checking for equipped objects
 */
export interface Message_Equippable_get_equipment {
    __kind: 'Equippable_get_equipment'
    tokenId: Id
    slotPartId: number
}

/**
 *  Used to equip a child nft into a token.
 *  # Requirements
 *   * Called on Parent token contract
 *   * If the `Slot` already has an item equipped, the execution will be reverted.
 *   * If the child can't be used in the given `Slot`, the execution will be reverted.
 *   * If the base doesn't allow this equip to happen, the execution will be reverted.
 *     
 *  # Arguments:
 *   * `token_id ID` of the token that had an asset equipped
 *   * `asset_id ID` of the asset associated with the token we are equipping into
 *   * `slot_part_id` ID of the slot we are using to equip
 *   * `child_nft` Child NFT tuple (CollectionId, Id)
 *   * `child_asset_id` ID of the asset associated with the token we are equipping
 *  Emits an {ChildAssetEquipped} event.
 */
export interface Message_Equippable_equip {
    __kind: 'Equippable_equip'
    tokenId: Id
    assetId: number
    slotPartId: number
    childNft: [Uint8Array, Id]
    childAssetId: number
}

/**
 *  Used to get the asset and equippable data associated with given `asset_id`.
 *  # Arguments:
 *   * tokenId ID of the token for which to retrieve the asset
 *   * asset_id ID of the asset of which we are retrieving
 *  # Returns:
 *     * asset_id metadataURI,
 *     * EquippableAsset
 */
export interface Message_Equippable_get_asset_and_equippable_data {
    __kind: 'Equippable_get_asset_and_equippable_data'
    tokenId: Id
    assetId: number
}

/**
 *  Used to unequip child from parent token.
 *  # Requirements
 *   * This can only be called by the owner of the token or by an account that has been granted permission to
 *   * Called on Parent token contract
 * 
 *  # Arguments:
 *   * `token_id` ID of the token that had an asset unequipped
 *   * `asset_id` ID of the asset associated with the token we are unequipping from
 *   * `slot_part_id` ID of the slot we are using to unequip
 *   * `child_nft` Child NFT tuple (CollectionId, Id)
 *   * `child_asset_id` ID of the asset associated with the token we are unequipping
 *  Emits an {ChildAssetUnequipped} event.
 */
export interface Message_Equippable_unequip {
    __kind: 'Equippable_unequip'
    tokenId: Id
    slotPartId: number
}

/**
 *  Used to declare that the assets belonging to a given `equippableGroupId` are equippable into the `Slot`
 *  associated with the `partId` of the collection at the specified `parentAddress`
 *  # Requirements
 *   * Called on Child Token contract
 * 
 *  # Arguments:
 *   * `equippable_group_id` ID of the equippable group
 *   * `parent_address` Address of the parent into which the equippable group can be equipped into
 *   * `part_id` ID of the `Slot` that the items belonging to the equippable group can be equipped into
 */
export interface Message_Equippable_set_valid_parent_for_equippable_group {
    __kind: 'Equippable_set_valid_parent_for_equippable_group'
    equippableGroupId: number
    parentAddress: Uint8Array
    partId: number
}

export type Constructor = Constructor_new

/**
 * Instantiate new RMRK contract
 */
export interface Constructor_new {
    __kind: 'new'
    name: Uint8Array
    symbol: Uint8Array
    baseUri: Uint8Array
    maxSupply: bigint
    pricePerMint: bigint
    collectionMetadata: Uint8Array
    royaltyReceiver: Uint8Array
    royalty: u8
}

export type Id = Id_U8 | Id_U16 | Id_U32 | Id_U64 | Id_U128 | Id_Bytes

export interface Id_U8 {
    __kind: 'U8'
    value: u8
}

export interface Id_U16 {
    __kind: 'U16'
    value: number
}

export interface Id_U32 {
    __kind: 'U32'
    value: number
}

export interface Id_U64 {
    __kind: 'U64'
    value: bigint
}

export interface Id_U128 {
    __kind: 'U128'
    value: bigint
}

export interface Id_Bytes {
    __kind: 'Bytes'
    value: Uint8Array
}

export interface Part {
    partType: PartType
    z: u8
    equippable: AddEquippableAddressesInput2
    metadataUri: Uint8Array
    isEquippableByAll: boolean
}

export type AddPartListInput1 = Part[]

export type AddEquippableAddressesInput2 = Uint8Array[]

export type u8 = number

export type PartType = PartType_None | PartType_Slot | PartType_Fixed

export interface PartType_None {
    __kind: 'None'
}

export interface PartType_Slot {
    __kind: 'Slot'
}

export interface PartType_Fixed {
    __kind: 'Fixed'
}

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}
