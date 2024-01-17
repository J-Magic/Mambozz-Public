/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createIndividualUserAccount = /* GraphQL */ `
  mutation CreateIndividualUserAccount($UserID: ID!) {
    createIndividualUserAccount(UserID: $UserID) {
      ID
      UserID
      currentBalance
      transactions {
        TransactionID
        category
        type
        transactionExecutorId
        transactionAmount
        currency
        forUserId
        createdAt
        status
      }
      chamas {
        GroupID
        groupName
        groupMembers {
          id
          username
          phoneNumber
          numbers {
            items {
              number
              createdAt
              updatedAt
              userNumbersId
              owner
            }
            nextToken
          }
          email
          chatStatus
          chatImage
          imageKey
          chatMessages {
            items {
              id
              createdAt
              type
              text
              userId
              chatRoomId
              chatAttachments {
                items {
                  id
                  chatMessageID
                  chatRoomID
                  storageKey
                  type
                  width
                  height
                  duration
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              status
              replyToMessageID
              forUserId
              updatedAt
              owner
            }
            nextToken
          }
          chatRooms {
            items {
              id
              userId
              chatRoomId
              user {
                id
                username
                phoneNumber
                numbers {
                  items {
                    number
                    createdAt
                    updatedAt
                    userNumbersId
                    owner
                  }
                  nextToken
                }
                email
                chatStatus
                chatImage
                imageKey
                chatMessages {
                  items {
                    id
                    createdAt
                    type
                    text
                    userId
                    chatRoomId
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    status
                    replyToMessageID
                    forUserId
                    updatedAt
                    owner
                  }
                  nextToken
                }
                chatRooms {
                  items {
                    id
                    userId
                    chatRoomId
                    user {
                      id
                      username
                      phoneNumber
                      numbers {
                        nextToken
                      }
                      email
                      chatStatus
                      chatImage
                      imageKey
                      chatMessages {
                        nextToken
                      }
                      chatRooms {
                        nextToken
                      }
                      lastOnlineAt
                      adminRightsId
                      publicKey
                      createdAt
                      updatedAt
                      owner
                    }
                    chatRoom {
                      id
                      chatRoomId
                      adminRightsId
                      name
                      image
                      users {
                        nextToken
                      }
                      chatMessages {
                        nextToken
                      }
                      newMessages
                      lastMessage {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      chatAttachments {
                        nextToken
                      }
                      createdAt
                      updatedAt
                      chatRoomLastMessageId
                      owner
                    }
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                lastOnlineAt
                adminRightsId
                publicKey
                createdAt
                updatedAt
                owner
              }
              chatRoom {
                id
                chatRoomId
                adminRightsId
                name
                image
                users {
                  items {
                    id
                    userId
                    chatRoomId
                    user {
                      id
                      username
                      phoneNumber
                      numbers {
                        nextToken
                      }
                      email
                      chatStatus
                      chatImage
                      imageKey
                      chatMessages {
                        nextToken
                      }
                      chatRooms {
                        nextToken
                      }
                      lastOnlineAt
                      adminRightsId
                      publicKey
                      createdAt
                      updatedAt
                      owner
                    }
                    chatRoom {
                      id
                      chatRoomId
                      adminRightsId
                      name
                      image
                      users {
                        nextToken
                      }
                      chatMessages {
                        nextToken
                      }
                      newMessages
                      lastMessage {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      chatAttachments {
                        nextToken
                      }
                      createdAt
                      updatedAt
                      chatRoomLastMessageId
                      owner
                    }
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                chatMessages {
                  items {
                    id
                    createdAt
                    type
                    text
                    userId
                    chatRoomId
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    status
                    replyToMessageID
                    forUserId
                    updatedAt
                    owner
                  }
                  nextToken
                }
                newMessages
                lastMessage {
                  id
                  createdAt
                  type
                  text
                  userId
                  chatRoomId
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  status
                  replyToMessageID
                  forUserId
                  updatedAt
                  owner
                }
                chatAttachments {
                  items {
                    id
                    chatMessageID
                    chatRoomID
                    storageKey
                    type
                    width
                    height
                    duration
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                createdAt
                updatedAt
                chatRoomLastMessageId
                owner
              }
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          lastOnlineAt
          adminRightsId
          publicKey
          createdAt
          updatedAt
          owner
        }
        currentBalance
        transactions {
          TransactionID
          category
          type
          transactionExecutorId
          transactionAmount
          currency
          forUserId
          createdAt
          status
        }
        approvedLoanKitty
        approvedInvestmentKitty
        loansDisbursed {
          LoanID
          loaneeID
          category
          amountLoaned
          currency
          loanDisbursementDate
          interestRate
          loanPeriod
          totalInterestPayable
          totalLoanPayable
          installments
          installmentAmount
          installmentPaymentDate
          latePayments
          totalPaidtoDate
          percentagePaidtoDate
          repayments {
            LoanRepaymentID
            loanId
            loaneeId
            transactionID
            installmentDate
            installmentAmount
            paymentAmount
            paymentDate
            installmentBalance
          }
          loanDueDate
          fullyPaid
          defaulted
          actualAmountPaidonCompletion
          status
        }
        paidLoans
        activeLoans
        nonPerformingLoans
        createdAt
        updatedAt
      }
      loans {
        LoanID
        loaneeID
        category
        amountLoaned
        currency
        loanDisbursementDate
        interestRate
        loanPeriod
        totalInterestPayable
        totalLoanPayable
        installments
        installmentAmount
        installmentPaymentDate
        latePayments
        totalPaidtoDate
        percentagePaidtoDate
        repayments {
          LoanRepaymentID
          loanId
          loaneeId
          transactionID
          installmentDate
          installmentAmount
          paymentAmount
          paymentDate
          installmentBalance
        }
        loanDueDate
        fullyPaid
        defaulted
        actualAmountPaidonCompletion
        status
      }
      paidLoans
      activeLoans
      nonPerformingLoans
      lateLoanInstallmentRepayments
      loanRating
      loanRepayments {
        LoanRepaymentID
        loanId
        loaneeId
        transactionID
        installmentDate
        installmentAmount
        paymentAmount
        paymentDate
        installmentBalance
      }
      purchases {
        PurchaseID
        itemName
        quantity
        unitPrice
        currency
        BusinessID
        paymentStatus
        TransactionSettled
      }
      businesses {
        BusinessID
        businessName
        ownerUserId
        currentBalance
        transactions {
          TransactionID
          category
          type
          transactionExecutorId
          transactionAmount
          currency
          forUserId
          createdAt
          status
        }
        purchases {
          PurchaseID
          itemName
          quantity
          unitPrice
          currency
          BusinessID
          paymentStatus
          TransactionSettled
        }
        sales {
          SaleID
          itemName
          quantity
          unitPrice
          currency
          BusinessID
          paymentStatus
          TransactionSettled
        }
        inventory {
          InventoryID
          categoryName
          subCategoryName
          itemName
          currentStock
          unsettledOrders
          unitSalePrice
          currency
          createdAt
          updatedAt
        }
        loans {
          LoanID
          loaneeID
          category
          amountLoaned
          currency
          loanDisbursementDate
          interestRate
          loanPeriod
          totalInterestPayable
          totalLoanPayable
          installments
          installmentAmount
          installmentPaymentDate
          latePayments
          totalPaidtoDate
          percentagePaidtoDate
          repayments {
            LoanRepaymentID
            loanId
            loaneeId
            transactionID
            installmentDate
            installmentAmount
            paymentAmount
            paymentDate
            installmentBalance
          }
          loanDueDate
          fullyPaid
          defaulted
          actualAmountPaidonCompletion
          status
        }
        paidLoans
        activeLoans
        nonPerformingLoans
        lateLoanInstallmentRepayments
        loanRating
        loanRepayments {
          LoanRepaymentID
          loanId
          loaneeId
          transactionID
          installmentDate
          installmentAmount
          paymentAmount
          paymentDate
          installmentBalance
        }
      }
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      phoneNumber
      numbers {
        items {
          number
          createdAt
          updatedAt
          userNumbersId
          owner
        }
        nextToken
      }
      email
      chatStatus
      chatImage
      imageKey
      chatMessages {
        items {
          id
          createdAt
          type
          text
          userId
          chatRoomId
          chatAttachments {
            items {
              id
              chatMessageID
              chatRoomID
              storageKey
              type
              width
              height
              duration
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          status
          replyToMessageID
          forUserId
          updatedAt
          owner
        }
        nextToken
      }
      chatRooms {
        items {
          id
          userId
          chatRoomId
          user {
            id
            username
            phoneNumber
            numbers {
              items {
                number
                createdAt
                updatedAt
                userNumbersId
                owner
              }
              nextToken
            }
            email
            chatStatus
            chatImage
            imageKey
            chatMessages {
              items {
                id
                createdAt
                type
                text
                userId
                chatRoomId
                chatAttachments {
                  items {
                    id
                    chatMessageID
                    chatRoomID
                    storageKey
                    type
                    width
                    height
                    duration
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                status
                replyToMessageID
                forUserId
                updatedAt
                owner
              }
              nextToken
            }
            chatRooms {
              items {
                id
                userId
                chatRoomId
                user {
                  id
                  username
                  phoneNumber
                  numbers {
                    items {
                      number
                      createdAt
                      updatedAt
                      userNumbersId
                      owner
                    }
                    nextToken
                  }
                  email
                  chatStatus
                  chatImage
                  imageKey
                  chatMessages {
                    items {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  chatRooms {
                    items {
                      id
                      userId
                      chatRoomId
                      user {
                        id
                        username
                        phoneNumber
                        email
                        chatStatus
                        chatImage
                        imageKey
                        lastOnlineAt
                        adminRightsId
                        publicKey
                        createdAt
                        updatedAt
                        owner
                      }
                      chatRoom {
                        id
                        chatRoomId
                        adminRightsId
                        name
                        image
                        newMessages
                        createdAt
                        updatedAt
                        chatRoomLastMessageId
                        owner
                      }
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  lastOnlineAt
                  adminRightsId
                  publicKey
                  createdAt
                  updatedAt
                  owner
                }
                chatRoom {
                  id
                  chatRoomId
                  adminRightsId
                  name
                  image
                  users {
                    items {
                      id
                      userId
                      chatRoomId
                      user {
                        id
                        username
                        phoneNumber
                        email
                        chatStatus
                        chatImage
                        imageKey
                        lastOnlineAt
                        adminRightsId
                        publicKey
                        createdAt
                        updatedAt
                        owner
                      }
                      chatRoom {
                        id
                        chatRoomId
                        adminRightsId
                        name
                        image
                        newMessages
                        createdAt
                        updatedAt
                        chatRoomLastMessageId
                        owner
                      }
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  chatMessages {
                    items {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  newMessages
                  lastMessage {
                    id
                    createdAt
                    type
                    text
                    userId
                    chatRoomId
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    status
                    replyToMessageID
                    forUserId
                    updatedAt
                    owner
                  }
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  owner
                }
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            lastOnlineAt
            adminRightsId
            publicKey
            createdAt
            updatedAt
            owner
          }
          chatRoom {
            id
            chatRoomId
            adminRightsId
            name
            image
            users {
              items {
                id
                userId
                chatRoomId
                user {
                  id
                  username
                  phoneNumber
                  numbers {
                    items {
                      number
                      createdAt
                      updatedAt
                      userNumbersId
                      owner
                    }
                    nextToken
                  }
                  email
                  chatStatus
                  chatImage
                  imageKey
                  chatMessages {
                    items {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  chatRooms {
                    items {
                      id
                      userId
                      chatRoomId
                      user {
                        id
                        username
                        phoneNumber
                        email
                        chatStatus
                        chatImage
                        imageKey
                        lastOnlineAt
                        adminRightsId
                        publicKey
                        createdAt
                        updatedAt
                        owner
                      }
                      chatRoom {
                        id
                        chatRoomId
                        adminRightsId
                        name
                        image
                        newMessages
                        createdAt
                        updatedAt
                        chatRoomLastMessageId
                        owner
                      }
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  lastOnlineAt
                  adminRightsId
                  publicKey
                  createdAt
                  updatedAt
                  owner
                }
                chatRoom {
                  id
                  chatRoomId
                  adminRightsId
                  name
                  image
                  users {
                    items {
                      id
                      userId
                      chatRoomId
                      user {
                        id
                        username
                        phoneNumber
                        email
                        chatStatus
                        chatImage
                        imageKey
                        lastOnlineAt
                        adminRightsId
                        publicKey
                        createdAt
                        updatedAt
                        owner
                      }
                      chatRoom {
                        id
                        chatRoomId
                        adminRightsId
                        name
                        image
                        newMessages
                        createdAt
                        updatedAt
                        chatRoomLastMessageId
                        owner
                      }
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  chatMessages {
                    items {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  newMessages
                  lastMessage {
                    id
                    createdAt
                    type
                    text
                    userId
                    chatRoomId
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    status
                    replyToMessageID
                    forUserId
                    updatedAt
                    owner
                  }
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  owner
                }
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            chatMessages {
              items {
                id
                createdAt
                type
                text
                userId
                chatRoomId
                chatAttachments {
                  items {
                    id
                    chatMessageID
                    chatRoomID
                    storageKey
                    type
                    width
                    height
                    duration
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                status
                replyToMessageID
                forUserId
                updatedAt
                owner
              }
              nextToken
            }
            newMessages
            lastMessage {
              id
              createdAt
              type
              text
              userId
              chatRoomId
              chatAttachments {
                items {
                  id
                  chatMessageID
                  chatRoomID
                  storageKey
                  type
                  width
                  height
                  duration
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              status
              replyToMessageID
              forUserId
              updatedAt
              owner
            }
            chatAttachments {
              items {
                id
                chatMessageID
                chatRoomID
                storageKey
                type
                width
                height
                duration
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
            owner
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      lastOnlineAt
      adminRightsId
      publicKey
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      phoneNumber
      numbers {
        items {
          number
          createdAt
          updatedAt
          userNumbersId
          owner
        }
        nextToken
      }
      email
      chatStatus
      chatImage
      imageKey
      chatMessages {
        items {
          id
          createdAt
          type
          text
          userId
          chatRoomId
          chatAttachments {
            items {
              id
              chatMessageID
              chatRoomID
              storageKey
              type
              width
              height
              duration
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          status
          replyToMessageID
          forUserId
          updatedAt
          owner
        }
        nextToken
      }
      chatRooms {
        items {
          id
          userId
          chatRoomId
          user {
            id
            username
            phoneNumber
            numbers {
              items {
                number
                createdAt
                updatedAt
                userNumbersId
                owner
              }
              nextToken
            }
            email
            chatStatus
            chatImage
            imageKey
            chatMessages {
              items {
                id
                createdAt
                type
                text
                userId
                chatRoomId
                chatAttachments {
                  items {
                    id
                    chatMessageID
                    chatRoomID
                    storageKey
                    type
                    width
                    height
                    duration
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                status
                replyToMessageID
                forUserId
                updatedAt
                owner
              }
              nextToken
            }
            chatRooms {
              items {
                id
                userId
                chatRoomId
                user {
                  id
                  username
                  phoneNumber
                  numbers {
                    items {
                      number
                      createdAt
                      updatedAt
                      userNumbersId
                      owner
                    }
                    nextToken
                  }
                  email
                  chatStatus
                  chatImage
                  imageKey
                  chatMessages {
                    items {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  chatRooms {
                    items {
                      id
                      userId
                      chatRoomId
                      user {
                        id
                        username
                        phoneNumber
                        email
                        chatStatus
                        chatImage
                        imageKey
                        lastOnlineAt
                        adminRightsId
                        publicKey
                        createdAt
                        updatedAt
                        owner
                      }
                      chatRoom {
                        id
                        chatRoomId
                        adminRightsId
                        name
                        image
                        newMessages
                        createdAt
                        updatedAt
                        chatRoomLastMessageId
                        owner
                      }
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  lastOnlineAt
                  adminRightsId
                  publicKey
                  createdAt
                  updatedAt
                  owner
                }
                chatRoom {
                  id
                  chatRoomId
                  adminRightsId
                  name
                  image
                  users {
                    items {
                      id
                      userId
                      chatRoomId
                      user {
                        id
                        username
                        phoneNumber
                        email
                        chatStatus
                        chatImage
                        imageKey
                        lastOnlineAt
                        adminRightsId
                        publicKey
                        createdAt
                        updatedAt
                        owner
                      }
                      chatRoom {
                        id
                        chatRoomId
                        adminRightsId
                        name
                        image
                        newMessages
                        createdAt
                        updatedAt
                        chatRoomLastMessageId
                        owner
                      }
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  chatMessages {
                    items {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  newMessages
                  lastMessage {
                    id
                    createdAt
                    type
                    text
                    userId
                    chatRoomId
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    status
                    replyToMessageID
                    forUserId
                    updatedAt
                    owner
                  }
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  owner
                }
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            lastOnlineAt
            adminRightsId
            publicKey
            createdAt
            updatedAt
            owner
          }
          chatRoom {
            id
            chatRoomId
            adminRightsId
            name
            image
            users {
              items {
                id
                userId
                chatRoomId
                user {
                  id
                  username
                  phoneNumber
                  numbers {
                    items {
                      number
                      createdAt
                      updatedAt
                      userNumbersId
                      owner
                    }
                    nextToken
                  }
                  email
                  chatStatus
                  chatImage
                  imageKey
                  chatMessages {
                    items {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  chatRooms {
                    items {
                      id
                      userId
                      chatRoomId
                      user {
                        id
                        username
                        phoneNumber
                        email
                        chatStatus
                        chatImage
                        imageKey
                        lastOnlineAt
                        adminRightsId
                        publicKey
                        createdAt
                        updatedAt
                        owner
                      }
                      chatRoom {
                        id
                        chatRoomId
                        adminRightsId
                        name
                        image
                        newMessages
                        createdAt
                        updatedAt
                        chatRoomLastMessageId
                        owner
                      }
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  lastOnlineAt
                  adminRightsId
                  publicKey
                  createdAt
                  updatedAt
                  owner
                }
                chatRoom {
                  id
                  chatRoomId
                  adminRightsId
                  name
                  image
                  users {
                    items {
                      id
                      userId
                      chatRoomId
                      user {
                        id
                        username
                        phoneNumber
                        email
                        chatStatus
                        chatImage
                        imageKey
                        lastOnlineAt
                        adminRightsId
                        publicKey
                        createdAt
                        updatedAt
                        owner
                      }
                      chatRoom {
                        id
                        chatRoomId
                        adminRightsId
                        name
                        image
                        newMessages
                        createdAt
                        updatedAt
                        chatRoomLastMessageId
                        owner
                      }
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  chatMessages {
                    items {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  newMessages
                  lastMessage {
                    id
                    createdAt
                    type
                    text
                    userId
                    chatRoomId
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    status
                    replyToMessageID
                    forUserId
                    updatedAt
                    owner
                  }
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  owner
                }
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            chatMessages {
              items {
                id
                createdAt
                type
                text
                userId
                chatRoomId
                chatAttachments {
                  items {
                    id
                    chatMessageID
                    chatRoomID
                    storageKey
                    type
                    width
                    height
                    duration
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                status
                replyToMessageID
                forUserId
                updatedAt
                owner
              }
              nextToken
            }
            newMessages
            lastMessage {
              id
              createdAt
              type
              text
              userId
              chatRoomId
              chatAttachments {
                items {
                  id
                  chatMessageID
                  chatRoomID
                  storageKey
                  type
                  width
                  height
                  duration
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              status
              replyToMessageID
              forUserId
              updatedAt
              owner
            }
            chatAttachments {
              items {
                id
                chatMessageID
                chatRoomID
                storageKey
                type
                width
                height
                duration
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
            owner
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      lastOnlineAt
      adminRightsId
      publicKey
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      phoneNumber
      numbers {
        items {
          number
          createdAt
          updatedAt
          userNumbersId
          owner
        }
        nextToken
      }
      email
      chatStatus
      chatImage
      imageKey
      chatMessages {
        items {
          id
          createdAt
          type
          text
          userId
          chatRoomId
          chatAttachments {
            items {
              id
              chatMessageID
              chatRoomID
              storageKey
              type
              width
              height
              duration
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          status
          replyToMessageID
          forUserId
          updatedAt
          owner
        }
        nextToken
      }
      chatRooms {
        items {
          id
          userId
          chatRoomId
          user {
            id
            username
            phoneNumber
            numbers {
              items {
                number
                createdAt
                updatedAt
                userNumbersId
                owner
              }
              nextToken
            }
            email
            chatStatus
            chatImage
            imageKey
            chatMessages {
              items {
                id
                createdAt
                type
                text
                userId
                chatRoomId
                chatAttachments {
                  items {
                    id
                    chatMessageID
                    chatRoomID
                    storageKey
                    type
                    width
                    height
                    duration
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                status
                replyToMessageID
                forUserId
                updatedAt
                owner
              }
              nextToken
            }
            chatRooms {
              items {
                id
                userId
                chatRoomId
                user {
                  id
                  username
                  phoneNumber
                  numbers {
                    items {
                      number
                      createdAt
                      updatedAt
                      userNumbersId
                      owner
                    }
                    nextToken
                  }
                  email
                  chatStatus
                  chatImage
                  imageKey
                  chatMessages {
                    items {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  chatRooms {
                    items {
                      id
                      userId
                      chatRoomId
                      user {
                        id
                        username
                        phoneNumber
                        email
                        chatStatus
                        chatImage
                        imageKey
                        lastOnlineAt
                        adminRightsId
                        publicKey
                        createdAt
                        updatedAt
                        owner
                      }
                      chatRoom {
                        id
                        chatRoomId
                        adminRightsId
                        name
                        image
                        newMessages
                        createdAt
                        updatedAt
                        chatRoomLastMessageId
                        owner
                      }
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  lastOnlineAt
                  adminRightsId
                  publicKey
                  createdAt
                  updatedAt
                  owner
                }
                chatRoom {
                  id
                  chatRoomId
                  adminRightsId
                  name
                  image
                  users {
                    items {
                      id
                      userId
                      chatRoomId
                      user {
                        id
                        username
                        phoneNumber
                        email
                        chatStatus
                        chatImage
                        imageKey
                        lastOnlineAt
                        adminRightsId
                        publicKey
                        createdAt
                        updatedAt
                        owner
                      }
                      chatRoom {
                        id
                        chatRoomId
                        adminRightsId
                        name
                        image
                        newMessages
                        createdAt
                        updatedAt
                        chatRoomLastMessageId
                        owner
                      }
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  chatMessages {
                    items {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  newMessages
                  lastMessage {
                    id
                    createdAt
                    type
                    text
                    userId
                    chatRoomId
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    status
                    replyToMessageID
                    forUserId
                    updatedAt
                    owner
                  }
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  owner
                }
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            lastOnlineAt
            adminRightsId
            publicKey
            createdAt
            updatedAt
            owner
          }
          chatRoom {
            id
            chatRoomId
            adminRightsId
            name
            image
            users {
              items {
                id
                userId
                chatRoomId
                user {
                  id
                  username
                  phoneNumber
                  numbers {
                    items {
                      number
                      createdAt
                      updatedAt
                      userNumbersId
                      owner
                    }
                    nextToken
                  }
                  email
                  chatStatus
                  chatImage
                  imageKey
                  chatMessages {
                    items {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  chatRooms {
                    items {
                      id
                      userId
                      chatRoomId
                      user {
                        id
                        username
                        phoneNumber
                        email
                        chatStatus
                        chatImage
                        imageKey
                        lastOnlineAt
                        adminRightsId
                        publicKey
                        createdAt
                        updatedAt
                        owner
                      }
                      chatRoom {
                        id
                        chatRoomId
                        adminRightsId
                        name
                        image
                        newMessages
                        createdAt
                        updatedAt
                        chatRoomLastMessageId
                        owner
                      }
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  lastOnlineAt
                  adminRightsId
                  publicKey
                  createdAt
                  updatedAt
                  owner
                }
                chatRoom {
                  id
                  chatRoomId
                  adminRightsId
                  name
                  image
                  users {
                    items {
                      id
                      userId
                      chatRoomId
                      user {
                        id
                        username
                        phoneNumber
                        email
                        chatStatus
                        chatImage
                        imageKey
                        lastOnlineAt
                        adminRightsId
                        publicKey
                        createdAt
                        updatedAt
                        owner
                      }
                      chatRoom {
                        id
                        chatRoomId
                        adminRightsId
                        name
                        image
                        newMessages
                        createdAt
                        updatedAt
                        chatRoomLastMessageId
                        owner
                      }
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  chatMessages {
                    items {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  newMessages
                  lastMessage {
                    id
                    createdAt
                    type
                    text
                    userId
                    chatRoomId
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    status
                    replyToMessageID
                    forUserId
                    updatedAt
                    owner
                  }
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  owner
                }
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            chatMessages {
              items {
                id
                createdAt
                type
                text
                userId
                chatRoomId
                chatAttachments {
                  items {
                    id
                    chatMessageID
                    chatRoomID
                    storageKey
                    type
                    width
                    height
                    duration
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                status
                replyToMessageID
                forUserId
                updatedAt
                owner
              }
              nextToken
            }
            newMessages
            lastMessage {
              id
              createdAt
              type
              text
              userId
              chatRoomId
              chatAttachments {
                items {
                  id
                  chatMessageID
                  chatRoomID
                  storageKey
                  type
                  width
                  height
                  duration
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              status
              replyToMessageID
              forUserId
              updatedAt
              owner
            }
            chatAttachments {
              items {
                id
                chatMessageID
                chatRoomID
                storageKey
                type
                width
                height
                duration
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
            owner
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      lastOnlineAt
      adminRightsId
      publicKey
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactInput!
    $condition: ModelContactConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
      number
      createdAt
      updatedAt
      userNumbersId
      owner
    }
  }
`;
export const updateContact = /* GraphQL */ `
  mutation UpdateContact(
    $input: UpdateContactInput!
    $condition: ModelContactConditionInput
  ) {
    updateContact(input: $input, condition: $condition) {
      number
      createdAt
      updatedAt
      userNumbersId
      owner
    }
  }
`;
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact(
    $input: DeleteContactInput!
    $condition: ModelContactConditionInput
  ) {
    deleteContact(input: $input, condition: $condition) {
      number
      createdAt
      updatedAt
      userNumbersId
      owner
    }
  }
`;
export const createAdminRights = /* GraphQL */ `
  mutation CreateAdminRights(
    $input: CreateAdminRightsInput!
    $condition: ModelAdminRightsConditionInput
  ) {
    createAdminRights(input: $input, condition: $condition) {
      id
      chatRoom {
        id
        chatRoomId
        adminRightsId
        name
        image
        users {
          items {
            id
            userId
            chatRoomId
            user {
              id
              username
              phoneNumber
              numbers {
                items {
                  number
                  createdAt
                  updatedAt
                  userNumbersId
                  owner
                }
                nextToken
              }
              email
              chatStatus
              chatImage
              imageKey
              chatMessages {
                items {
                  id
                  createdAt
                  type
                  text
                  userId
                  chatRoomId
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  status
                  replyToMessageID
                  forUserId
                  updatedAt
                  owner
                }
                nextToken
              }
              chatRooms {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    username
                    phoneNumber
                    numbers {
                      items {
                        number
                        createdAt
                        updatedAt
                        userNumbersId
                        owner
                      }
                      nextToken
                    }
                    email
                    chatStatus
                    chatImage
                    imageKey
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatRooms {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    lastOnlineAt
                    adminRightsId
                    publicKey
                    createdAt
                    updatedAt
                    owner
                  }
                  chatRoom {
                    id
                    chatRoomId
                    adminRightsId
                    name
                    image
                    users {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    newMessages
                    lastMessage {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    createdAt
                    updatedAt
                    chatRoomLastMessageId
                    owner
                  }
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              lastOnlineAt
              adminRightsId
              publicKey
              createdAt
              updatedAt
              owner
            }
            chatRoom {
              id
              chatRoomId
              adminRightsId
              name
              image
              users {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    username
                    phoneNumber
                    numbers {
                      items {
                        number
                        createdAt
                        updatedAt
                        userNumbersId
                        owner
                      }
                      nextToken
                    }
                    email
                    chatStatus
                    chatImage
                    imageKey
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatRooms {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    lastOnlineAt
                    adminRightsId
                    publicKey
                    createdAt
                    updatedAt
                    owner
                  }
                  chatRoom {
                    id
                    chatRoomId
                    adminRightsId
                    name
                    image
                    users {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    newMessages
                    lastMessage {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    createdAt
                    updatedAt
                    chatRoomLastMessageId
                    owner
                  }
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              chatMessages {
                items {
                  id
                  createdAt
                  type
                  text
                  userId
                  chatRoomId
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  status
                  replyToMessageID
                  forUserId
                  updatedAt
                  owner
                }
                nextToken
              }
              newMessages
              lastMessage {
                id
                createdAt
                type
                text
                userId
                chatRoomId
                chatAttachments {
                  items {
                    id
                    chatMessageID
                    chatRoomID
                    storageKey
                    type
                    width
                    height
                    duration
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                status
                replyToMessageID
                forUserId
                updatedAt
                owner
              }
              chatAttachments {
                items {
                  id
                  chatMessageID
                  chatRoomID
                  storageKey
                  type
                  width
                  height
                  duration
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              createdAt
              updatedAt
              chatRoomLastMessageId
              owner
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        chatMessages {
          items {
            id
            createdAt
            type
            text
            userId
            chatRoomId
            chatAttachments {
              items {
                id
                chatMessageID
                chatRoomID
                storageKey
                type
                width
                height
                duration
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            status
            replyToMessageID
            forUserId
            updatedAt
            owner
          }
          nextToken
        }
        newMessages
        lastMessage {
          id
          createdAt
          type
          text
          userId
          chatRoomId
          chatAttachments {
            items {
              id
              chatMessageID
              chatRoomID
              storageKey
              type
              width
              height
              duration
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          status
          replyToMessageID
          forUserId
          updatedAt
          owner
        }
        chatAttachments {
          items {
            id
            chatMessageID
            chatRoomID
            storageKey
            type
            width
            height
            duration
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
        owner
      }
      Users {
        items {
          id
          username
          phoneNumber
          numbers {
            items {
              number
              createdAt
              updatedAt
              userNumbersId
              owner
            }
            nextToken
          }
          email
          chatStatus
          chatImage
          imageKey
          chatMessages {
            items {
              id
              createdAt
              type
              text
              userId
              chatRoomId
              chatAttachments {
                items {
                  id
                  chatMessageID
                  chatRoomID
                  storageKey
                  type
                  width
                  height
                  duration
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              status
              replyToMessageID
              forUserId
              updatedAt
              owner
            }
            nextToken
          }
          chatRooms {
            items {
              id
              userId
              chatRoomId
              user {
                id
                username
                phoneNumber
                numbers {
                  items {
                    number
                    createdAt
                    updatedAt
                    userNumbersId
                    owner
                  }
                  nextToken
                }
                email
                chatStatus
                chatImage
                imageKey
                chatMessages {
                  items {
                    id
                    createdAt
                    type
                    text
                    userId
                    chatRoomId
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    status
                    replyToMessageID
                    forUserId
                    updatedAt
                    owner
                  }
                  nextToken
                }
                chatRooms {
                  items {
                    id
                    userId
                    chatRoomId
                    user {
                      id
                      username
                      phoneNumber
                      numbers {
                        nextToken
                      }
                      email
                      chatStatus
                      chatImage
                      imageKey
                      chatMessages {
                        nextToken
                      }
                      chatRooms {
                        nextToken
                      }
                      lastOnlineAt
                      adminRightsId
                      publicKey
                      createdAt
                      updatedAt
                      owner
                    }
                    chatRoom {
                      id
                      chatRoomId
                      adminRightsId
                      name
                      image
                      users {
                        nextToken
                      }
                      chatMessages {
                        nextToken
                      }
                      newMessages
                      lastMessage {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      chatAttachments {
                        nextToken
                      }
                      createdAt
                      updatedAt
                      chatRoomLastMessageId
                      owner
                    }
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                lastOnlineAt
                adminRightsId
                publicKey
                createdAt
                updatedAt
                owner
              }
              chatRoom {
                id
                chatRoomId
                adminRightsId
                name
                image
                users {
                  items {
                    id
                    userId
                    chatRoomId
                    user {
                      id
                      username
                      phoneNumber
                      numbers {
                        nextToken
                      }
                      email
                      chatStatus
                      chatImage
                      imageKey
                      chatMessages {
                        nextToken
                      }
                      chatRooms {
                        nextToken
                      }
                      lastOnlineAt
                      adminRightsId
                      publicKey
                      createdAt
                      updatedAt
                      owner
                    }
                    chatRoom {
                      id
                      chatRoomId
                      adminRightsId
                      name
                      image
                      users {
                        nextToken
                      }
                      chatMessages {
                        nextToken
                      }
                      newMessages
                      lastMessage {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      chatAttachments {
                        nextToken
                      }
                      createdAt
                      updatedAt
                      chatRoomLastMessageId
                      owner
                    }
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                chatMessages {
                  items {
                    id
                    createdAt
                    type
                    text
                    userId
                    chatRoomId
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    status
                    replyToMessageID
                    forUserId
                    updatedAt
                    owner
                  }
                  nextToken
                }
                newMessages
                lastMessage {
                  id
                  createdAt
                  type
                  text
                  userId
                  chatRoomId
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  status
                  replyToMessageID
                  forUserId
                  updatedAt
                  owner
                }
                chatAttachments {
                  items {
                    id
                    chatMessageID
                    chatRoomID
                    storageKey
                    type
                    width
                    height
                    duration
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                createdAt
                updatedAt
                chatRoomLastMessageId
                owner
              }
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          lastOnlineAt
          adminRightsId
          publicKey
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      adminRightsChatRoomId
      owner
    }
  }
`;
export const updateAdminRights = /* GraphQL */ `
  mutation UpdateAdminRights(
    $input: UpdateAdminRightsInput!
    $condition: ModelAdminRightsConditionInput
  ) {
    updateAdminRights(input: $input, condition: $condition) {
      id
      chatRoom {
        id
        chatRoomId
        adminRightsId
        name
        image
        users {
          items {
            id
            userId
            chatRoomId
            user {
              id
              username
              phoneNumber
              numbers {
                items {
                  number
                  createdAt
                  updatedAt
                  userNumbersId
                  owner
                }
                nextToken
              }
              email
              chatStatus
              chatImage
              imageKey
              chatMessages {
                items {
                  id
                  createdAt
                  type
                  text
                  userId
                  chatRoomId
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  status
                  replyToMessageID
                  forUserId
                  updatedAt
                  owner
                }
                nextToken
              }
              chatRooms {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    username
                    phoneNumber
                    numbers {
                      items {
                        number
                        createdAt
                        updatedAt
                        userNumbersId
                        owner
                      }
                      nextToken
                    }
                    email
                    chatStatus
                    chatImage
                    imageKey
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatRooms {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    lastOnlineAt
                    adminRightsId
                    publicKey
                    createdAt
                    updatedAt
                    owner
                  }
                  chatRoom {
                    id
                    chatRoomId
                    adminRightsId
                    name
                    image
                    users {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    newMessages
                    lastMessage {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    createdAt
                    updatedAt
                    chatRoomLastMessageId
                    owner
                  }
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              lastOnlineAt
              adminRightsId
              publicKey
              createdAt
              updatedAt
              owner
            }
            chatRoom {
              id
              chatRoomId
              adminRightsId
              name
              image
              users {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    username
                    phoneNumber
                    numbers {
                      items {
                        number
                        createdAt
                        updatedAt
                        userNumbersId
                        owner
                      }
                      nextToken
                    }
                    email
                    chatStatus
                    chatImage
                    imageKey
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatRooms {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    lastOnlineAt
                    adminRightsId
                    publicKey
                    createdAt
                    updatedAt
                    owner
                  }
                  chatRoom {
                    id
                    chatRoomId
                    adminRightsId
                    name
                    image
                    users {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    newMessages
                    lastMessage {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    createdAt
                    updatedAt
                    chatRoomLastMessageId
                    owner
                  }
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              chatMessages {
                items {
                  id
                  createdAt
                  type
                  text
                  userId
                  chatRoomId
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  status
                  replyToMessageID
                  forUserId
                  updatedAt
                  owner
                }
                nextToken
              }
              newMessages
              lastMessage {
                id
                createdAt
                type
                text
                userId
                chatRoomId
                chatAttachments {
                  items {
                    id
                    chatMessageID
                    chatRoomID
                    storageKey
                    type
                    width
                    height
                    duration
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                status
                replyToMessageID
                forUserId
                updatedAt
                owner
              }
              chatAttachments {
                items {
                  id
                  chatMessageID
                  chatRoomID
                  storageKey
                  type
                  width
                  height
                  duration
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              createdAt
              updatedAt
              chatRoomLastMessageId
              owner
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        chatMessages {
          items {
            id
            createdAt
            type
            text
            userId
            chatRoomId
            chatAttachments {
              items {
                id
                chatMessageID
                chatRoomID
                storageKey
                type
                width
                height
                duration
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            status
            replyToMessageID
            forUserId
            updatedAt
            owner
          }
          nextToken
        }
        newMessages
        lastMessage {
          id
          createdAt
          type
          text
          userId
          chatRoomId
          chatAttachments {
            items {
              id
              chatMessageID
              chatRoomID
              storageKey
              type
              width
              height
              duration
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          status
          replyToMessageID
          forUserId
          updatedAt
          owner
        }
        chatAttachments {
          items {
            id
            chatMessageID
            chatRoomID
            storageKey
            type
            width
            height
            duration
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
        owner
      }
      Users {
        items {
          id
          username
          phoneNumber
          numbers {
            items {
              number
              createdAt
              updatedAt
              userNumbersId
              owner
            }
            nextToken
          }
          email
          chatStatus
          chatImage
          imageKey
          chatMessages {
            items {
              id
              createdAt
              type
              text
              userId
              chatRoomId
              chatAttachments {
                items {
                  id
                  chatMessageID
                  chatRoomID
                  storageKey
                  type
                  width
                  height
                  duration
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              status
              replyToMessageID
              forUserId
              updatedAt
              owner
            }
            nextToken
          }
          chatRooms {
            items {
              id
              userId
              chatRoomId
              user {
                id
                username
                phoneNumber
                numbers {
                  items {
                    number
                    createdAt
                    updatedAt
                    userNumbersId
                    owner
                  }
                  nextToken
                }
                email
                chatStatus
                chatImage
                imageKey
                chatMessages {
                  items {
                    id
                    createdAt
                    type
                    text
                    userId
                    chatRoomId
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    status
                    replyToMessageID
                    forUserId
                    updatedAt
                    owner
                  }
                  nextToken
                }
                chatRooms {
                  items {
                    id
                    userId
                    chatRoomId
                    user {
                      id
                      username
                      phoneNumber
                      numbers {
                        nextToken
                      }
                      email
                      chatStatus
                      chatImage
                      imageKey
                      chatMessages {
                        nextToken
                      }
                      chatRooms {
                        nextToken
                      }
                      lastOnlineAt
                      adminRightsId
                      publicKey
                      createdAt
                      updatedAt
                      owner
                    }
                    chatRoom {
                      id
                      chatRoomId
                      adminRightsId
                      name
                      image
                      users {
                        nextToken
                      }
                      chatMessages {
                        nextToken
                      }
                      newMessages
                      lastMessage {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      chatAttachments {
                        nextToken
                      }
                      createdAt
                      updatedAt
                      chatRoomLastMessageId
                      owner
                    }
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                lastOnlineAt
                adminRightsId
                publicKey
                createdAt
                updatedAt
                owner
              }
              chatRoom {
                id
                chatRoomId
                adminRightsId
                name
                image
                users {
                  items {
                    id
                    userId
                    chatRoomId
                    user {
                      id
                      username
                      phoneNumber
                      numbers {
                        nextToken
                      }
                      email
                      chatStatus
                      chatImage
                      imageKey
                      chatMessages {
                        nextToken
                      }
                      chatRooms {
                        nextToken
                      }
                      lastOnlineAt
                      adminRightsId
                      publicKey
                      createdAt
                      updatedAt
                      owner
                    }
                    chatRoom {
                      id
                      chatRoomId
                      adminRightsId
                      name
                      image
                      users {
                        nextToken
                      }
                      chatMessages {
                        nextToken
                      }
                      newMessages
                      lastMessage {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      chatAttachments {
                        nextToken
                      }
                      createdAt
                      updatedAt
                      chatRoomLastMessageId
                      owner
                    }
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                chatMessages {
                  items {
                    id
                    createdAt
                    type
                    text
                    userId
                    chatRoomId
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    status
                    replyToMessageID
                    forUserId
                    updatedAt
                    owner
                  }
                  nextToken
                }
                newMessages
                lastMessage {
                  id
                  createdAt
                  type
                  text
                  userId
                  chatRoomId
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  status
                  replyToMessageID
                  forUserId
                  updatedAt
                  owner
                }
                chatAttachments {
                  items {
                    id
                    chatMessageID
                    chatRoomID
                    storageKey
                    type
                    width
                    height
                    duration
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                createdAt
                updatedAt
                chatRoomLastMessageId
                owner
              }
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          lastOnlineAt
          adminRightsId
          publicKey
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      adminRightsChatRoomId
      owner
    }
  }
`;
export const deleteAdminRights = /* GraphQL */ `
  mutation DeleteAdminRights(
    $input: DeleteAdminRightsInput!
    $condition: ModelAdminRightsConditionInput
  ) {
    deleteAdminRights(input: $input, condition: $condition) {
      id
      chatRoom {
        id
        chatRoomId
        adminRightsId
        name
        image
        users {
          items {
            id
            userId
            chatRoomId
            user {
              id
              username
              phoneNumber
              numbers {
                items {
                  number
                  createdAt
                  updatedAt
                  userNumbersId
                  owner
                }
                nextToken
              }
              email
              chatStatus
              chatImage
              imageKey
              chatMessages {
                items {
                  id
                  createdAt
                  type
                  text
                  userId
                  chatRoomId
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  status
                  replyToMessageID
                  forUserId
                  updatedAt
                  owner
                }
                nextToken
              }
              chatRooms {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    username
                    phoneNumber
                    numbers {
                      items {
                        number
                        createdAt
                        updatedAt
                        userNumbersId
                        owner
                      }
                      nextToken
                    }
                    email
                    chatStatus
                    chatImage
                    imageKey
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatRooms {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    lastOnlineAt
                    adminRightsId
                    publicKey
                    createdAt
                    updatedAt
                    owner
                  }
                  chatRoom {
                    id
                    chatRoomId
                    adminRightsId
                    name
                    image
                    users {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    newMessages
                    lastMessage {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    createdAt
                    updatedAt
                    chatRoomLastMessageId
                    owner
                  }
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              lastOnlineAt
              adminRightsId
              publicKey
              createdAt
              updatedAt
              owner
            }
            chatRoom {
              id
              chatRoomId
              adminRightsId
              name
              image
              users {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    username
                    phoneNumber
                    numbers {
                      items {
                        number
                        createdAt
                        updatedAt
                        userNumbersId
                        owner
                      }
                      nextToken
                    }
                    email
                    chatStatus
                    chatImage
                    imageKey
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatRooms {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    lastOnlineAt
                    adminRightsId
                    publicKey
                    createdAt
                    updatedAt
                    owner
                  }
                  chatRoom {
                    id
                    chatRoomId
                    adminRightsId
                    name
                    image
                    users {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    newMessages
                    lastMessage {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    createdAt
                    updatedAt
                    chatRoomLastMessageId
                    owner
                  }
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              chatMessages {
                items {
                  id
                  createdAt
                  type
                  text
                  userId
                  chatRoomId
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  status
                  replyToMessageID
                  forUserId
                  updatedAt
                  owner
                }
                nextToken
              }
              newMessages
              lastMessage {
                id
                createdAt
                type
                text
                userId
                chatRoomId
                chatAttachments {
                  items {
                    id
                    chatMessageID
                    chatRoomID
                    storageKey
                    type
                    width
                    height
                    duration
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                status
                replyToMessageID
                forUserId
                updatedAt
                owner
              }
              chatAttachments {
                items {
                  id
                  chatMessageID
                  chatRoomID
                  storageKey
                  type
                  width
                  height
                  duration
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              createdAt
              updatedAt
              chatRoomLastMessageId
              owner
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        chatMessages {
          items {
            id
            createdAt
            type
            text
            userId
            chatRoomId
            chatAttachments {
              items {
                id
                chatMessageID
                chatRoomID
                storageKey
                type
                width
                height
                duration
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            status
            replyToMessageID
            forUserId
            updatedAt
            owner
          }
          nextToken
        }
        newMessages
        lastMessage {
          id
          createdAt
          type
          text
          userId
          chatRoomId
          chatAttachments {
            items {
              id
              chatMessageID
              chatRoomID
              storageKey
              type
              width
              height
              duration
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          status
          replyToMessageID
          forUserId
          updatedAt
          owner
        }
        chatAttachments {
          items {
            id
            chatMessageID
            chatRoomID
            storageKey
            type
            width
            height
            duration
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
        owner
      }
      Users {
        items {
          id
          username
          phoneNumber
          numbers {
            items {
              number
              createdAt
              updatedAt
              userNumbersId
              owner
            }
            nextToken
          }
          email
          chatStatus
          chatImage
          imageKey
          chatMessages {
            items {
              id
              createdAt
              type
              text
              userId
              chatRoomId
              chatAttachments {
                items {
                  id
                  chatMessageID
                  chatRoomID
                  storageKey
                  type
                  width
                  height
                  duration
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              status
              replyToMessageID
              forUserId
              updatedAt
              owner
            }
            nextToken
          }
          chatRooms {
            items {
              id
              userId
              chatRoomId
              user {
                id
                username
                phoneNumber
                numbers {
                  items {
                    number
                    createdAt
                    updatedAt
                    userNumbersId
                    owner
                  }
                  nextToken
                }
                email
                chatStatus
                chatImage
                imageKey
                chatMessages {
                  items {
                    id
                    createdAt
                    type
                    text
                    userId
                    chatRoomId
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    status
                    replyToMessageID
                    forUserId
                    updatedAt
                    owner
                  }
                  nextToken
                }
                chatRooms {
                  items {
                    id
                    userId
                    chatRoomId
                    user {
                      id
                      username
                      phoneNumber
                      numbers {
                        nextToken
                      }
                      email
                      chatStatus
                      chatImage
                      imageKey
                      chatMessages {
                        nextToken
                      }
                      chatRooms {
                        nextToken
                      }
                      lastOnlineAt
                      adminRightsId
                      publicKey
                      createdAt
                      updatedAt
                      owner
                    }
                    chatRoom {
                      id
                      chatRoomId
                      adminRightsId
                      name
                      image
                      users {
                        nextToken
                      }
                      chatMessages {
                        nextToken
                      }
                      newMessages
                      lastMessage {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      chatAttachments {
                        nextToken
                      }
                      createdAt
                      updatedAt
                      chatRoomLastMessageId
                      owner
                    }
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                lastOnlineAt
                adminRightsId
                publicKey
                createdAt
                updatedAt
                owner
              }
              chatRoom {
                id
                chatRoomId
                adminRightsId
                name
                image
                users {
                  items {
                    id
                    userId
                    chatRoomId
                    user {
                      id
                      username
                      phoneNumber
                      numbers {
                        nextToken
                      }
                      email
                      chatStatus
                      chatImage
                      imageKey
                      chatMessages {
                        nextToken
                      }
                      chatRooms {
                        nextToken
                      }
                      lastOnlineAt
                      adminRightsId
                      publicKey
                      createdAt
                      updatedAt
                      owner
                    }
                    chatRoom {
                      id
                      chatRoomId
                      adminRightsId
                      name
                      image
                      users {
                        nextToken
                      }
                      chatMessages {
                        nextToken
                      }
                      newMessages
                      lastMessage {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      chatAttachments {
                        nextToken
                      }
                      createdAt
                      updatedAt
                      chatRoomLastMessageId
                      owner
                    }
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                chatMessages {
                  items {
                    id
                    createdAt
                    type
                    text
                    userId
                    chatRoomId
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    status
                    replyToMessageID
                    forUserId
                    updatedAt
                    owner
                  }
                  nextToken
                }
                newMessages
                lastMessage {
                  id
                  createdAt
                  type
                  text
                  userId
                  chatRoomId
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  status
                  replyToMessageID
                  forUserId
                  updatedAt
                  owner
                }
                chatAttachments {
                  items {
                    id
                    chatMessageID
                    chatRoomID
                    storageKey
                    type
                    width
                    height
                    duration
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                createdAt
                updatedAt
                chatRoomLastMessageId
                owner
              }
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          lastOnlineAt
          adminRightsId
          publicKey
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      adminRightsChatRoomId
      owner
    }
  }
`;
export const createChatMessage = /* GraphQL */ `
  mutation CreateChatMessage(
    $input: CreateChatMessageInput!
    $condition: ModelChatMessageConditionInput
  ) {
    createChatMessage(input: $input, condition: $condition) {
      id
      createdAt
      type
      text
      userId
      chatRoomId
      chatAttachments {
        items {
          id
          chatMessageID
          chatRoomID
          storageKey
          type
          width
          height
          duration
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      status
      replyToMessageID
      forUserId
      updatedAt
      owner
    }
  }
`;
export const updateChatMessage = /* GraphQL */ `
  mutation UpdateChatMessage(
    $input: UpdateChatMessageInput!
    $condition: ModelChatMessageConditionInput
  ) {
    updateChatMessage(input: $input, condition: $condition) {
      id
      createdAt
      type
      text
      userId
      chatRoomId
      chatAttachments {
        items {
          id
          chatMessageID
          chatRoomID
          storageKey
          type
          width
          height
          duration
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      status
      replyToMessageID
      forUserId
      updatedAt
      owner
    }
  }
`;
export const deleteChatMessage = /* GraphQL */ `
  mutation DeleteChatMessage(
    $input: DeleteChatMessageInput!
    $condition: ModelChatMessageConditionInput
  ) {
    deleteChatMessage(input: $input, condition: $condition) {
      id
      createdAt
      type
      text
      userId
      chatRoomId
      chatAttachments {
        items {
          id
          chatMessageID
          chatRoomID
          storageKey
          type
          width
          height
          duration
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      status
      replyToMessageID
      forUserId
      updatedAt
      owner
    }
  }
`;
export const createChatAttachment = /* GraphQL */ `
  mutation CreateChatAttachment(
    $input: CreateChatAttachmentInput!
    $condition: ModelChatAttachmentConditionInput
  ) {
    createChatAttachment(input: $input, condition: $condition) {
      id
      chatMessageID
      chatRoomID
      storageKey
      type
      width
      height
      duration
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateChatAttachment = /* GraphQL */ `
  mutation UpdateChatAttachment(
    $input: UpdateChatAttachmentInput!
    $condition: ModelChatAttachmentConditionInput
  ) {
    updateChatAttachment(input: $input, condition: $condition) {
      id
      chatMessageID
      chatRoomID
      storageKey
      type
      width
      height
      duration
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteChatAttachment = /* GraphQL */ `
  mutation DeleteChatAttachment(
    $input: DeleteChatAttachmentInput!
    $condition: ModelChatAttachmentConditionInput
  ) {
    deleteChatAttachment(input: $input, condition: $condition) {
      id
      chatMessageID
      chatRoomID
      storageKey
      type
      width
      height
      duration
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
      id
      chatRoomId
      adminRightsId
      name
      image
      users {
        items {
          id
          userId
          chatRoomId
          user {
            id
            username
            phoneNumber
            numbers {
              items {
                number
                createdAt
                updatedAt
                userNumbersId
                owner
              }
              nextToken
            }
            email
            chatStatus
            chatImage
            imageKey
            chatMessages {
              items {
                id
                createdAt
                type
                text
                userId
                chatRoomId
                chatAttachments {
                  items {
                    id
                    chatMessageID
                    chatRoomID
                    storageKey
                    type
                    width
                    height
                    duration
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                status
                replyToMessageID
                forUserId
                updatedAt
                owner
              }
              nextToken
            }
            chatRooms {
              items {
                id
                userId
                chatRoomId
                user {
                  id
                  username
                  phoneNumber
                  numbers {
                    items {
                      number
                      createdAt
                      updatedAt
                      userNumbersId
                      owner
                    }
                    nextToken
                  }
                  email
                  chatStatus
                  chatImage
                  imageKey
                  chatMessages {
                    items {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  chatRooms {
                    items {
                      id
                      userId
                      chatRoomId
                      user {
                        id
                        username
                        phoneNumber
                        email
                        chatStatus
                        chatImage
                        imageKey
                        lastOnlineAt
                        adminRightsId
                        publicKey
                        createdAt
                        updatedAt
                        owner
                      }
                      chatRoom {
                        id
                        chatRoomId
                        adminRightsId
                        name
                        image
                        newMessages
                        createdAt
                        updatedAt
                        chatRoomLastMessageId
                        owner
                      }
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  lastOnlineAt
                  adminRightsId
                  publicKey
                  createdAt
                  updatedAt
                  owner
                }
                chatRoom {
                  id
                  chatRoomId
                  adminRightsId
                  name
                  image
                  users {
                    items {
                      id
                      userId
                      chatRoomId
                      user {
                        id
                        username
                        phoneNumber
                        email
                        chatStatus
                        chatImage
                        imageKey
                        lastOnlineAt
                        adminRightsId
                        publicKey
                        createdAt
                        updatedAt
                        owner
                      }
                      chatRoom {
                        id
                        chatRoomId
                        adminRightsId
                        name
                        image
                        newMessages
                        createdAt
                        updatedAt
                        chatRoomLastMessageId
                        owner
                      }
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  chatMessages {
                    items {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  newMessages
                  lastMessage {
                    id
                    createdAt
                    type
                    text
                    userId
                    chatRoomId
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    status
                    replyToMessageID
                    forUserId
                    updatedAt
                    owner
                  }
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  owner
                }
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            lastOnlineAt
            adminRightsId
            publicKey
            createdAt
            updatedAt
            owner
          }
          chatRoom {
            id
            chatRoomId
            adminRightsId
            name
            image
            users {
              items {
                id
                userId
                chatRoomId
                user {
                  id
                  username
                  phoneNumber
                  numbers {
                    items {
                      number
                      createdAt
                      updatedAt
                      userNumbersId
                      owner
                    }
                    nextToken
                  }
                  email
                  chatStatus
                  chatImage
                  imageKey
                  chatMessages {
                    items {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  chatRooms {
                    items {
                      id
                      userId
                      chatRoomId
                      user {
                        id
                        username
                        phoneNumber
                        email
                        chatStatus
                        chatImage
                        imageKey
                        lastOnlineAt
                        adminRightsId
                        publicKey
                        createdAt
                        updatedAt
                        owner
                      }
                      chatRoom {
                        id
                        chatRoomId
                        adminRightsId
                        name
                        image
                        newMessages
                        createdAt
                        updatedAt
                        chatRoomLastMessageId
                        owner
                      }
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  lastOnlineAt
                  adminRightsId
                  publicKey
                  createdAt
                  updatedAt
                  owner
                }
                chatRoom {
                  id
                  chatRoomId
                  adminRightsId
                  name
                  image
                  users {
                    items {
                      id
                      userId
                      chatRoomId
                      user {
                        id
                        username
                        phoneNumber
                        email
                        chatStatus
                        chatImage
                        imageKey
                        lastOnlineAt
                        adminRightsId
                        publicKey
                        createdAt
                        updatedAt
                        owner
                      }
                      chatRoom {
                        id
                        chatRoomId
                        adminRightsId
                        name
                        image
                        newMessages
                        createdAt
                        updatedAt
                        chatRoomLastMessageId
                        owner
                      }
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  chatMessages {
                    items {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  newMessages
                  lastMessage {
                    id
                    createdAt
                    type
                    text
                    userId
                    chatRoomId
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    status
                    replyToMessageID
                    forUserId
                    updatedAt
                    owner
                  }
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  owner
                }
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            chatMessages {
              items {
                id
                createdAt
                type
                text
                userId
                chatRoomId
                chatAttachments {
                  items {
                    id
                    chatMessageID
                    chatRoomID
                    storageKey
                    type
                    width
                    height
                    duration
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                status
                replyToMessageID
                forUserId
                updatedAt
                owner
              }
              nextToken
            }
            newMessages
            lastMessage {
              id
              createdAt
              type
              text
              userId
              chatRoomId
              chatAttachments {
                items {
                  id
                  chatMessageID
                  chatRoomID
                  storageKey
                  type
                  width
                  height
                  duration
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              status
              replyToMessageID
              forUserId
              updatedAt
              owner
            }
            chatAttachments {
              items {
                id
                chatMessageID
                chatRoomID
                storageKey
                type
                width
                height
                duration
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
            owner
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      chatMessages {
        items {
          id
          createdAt
          type
          text
          userId
          chatRoomId
          chatAttachments {
            items {
              id
              chatMessageID
              chatRoomID
              storageKey
              type
              width
              height
              duration
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          status
          replyToMessageID
          forUserId
          updatedAt
          owner
        }
        nextToken
      }
      newMessages
      lastMessage {
        id
        createdAt
        type
        text
        userId
        chatRoomId
        chatAttachments {
          items {
            id
            chatMessageID
            chatRoomID
            storageKey
            type
            width
            height
            duration
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        status
        replyToMessageID
        forUserId
        updatedAt
        owner
      }
      chatAttachments {
        items {
          id
          chatMessageID
          chatRoomID
          storageKey
          type
          width
          height
          duration
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
      owner
    }
  }
`;
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
      id
      chatRoomId
      adminRightsId
      name
      image
      users {
        items {
          id
          userId
          chatRoomId
          user {
            id
            username
            phoneNumber
            numbers {
              items {
                number
                createdAt
                updatedAt
                userNumbersId
                owner
              }
              nextToken
            }
            email
            chatStatus
            chatImage
            imageKey
            chatMessages {
              items {
                id
                createdAt
                type
                text
                userId
                chatRoomId
                chatAttachments {
                  items {
                    id
                    chatMessageID
                    chatRoomID
                    storageKey
                    type
                    width
                    height
                    duration
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                status
                replyToMessageID
                forUserId
                updatedAt
                owner
              }
              nextToken
            }
            chatRooms {
              items {
                id
                userId
                chatRoomId
                user {
                  id
                  username
                  phoneNumber
                  numbers {
                    items {
                      number
                      createdAt
                      updatedAt
                      userNumbersId
                      owner
                    }
                    nextToken
                  }
                  email
                  chatStatus
                  chatImage
                  imageKey
                  chatMessages {
                    items {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  chatRooms {
                    items {
                      id
                      userId
                      chatRoomId
                      user {
                        id
                        username
                        phoneNumber
                        email
                        chatStatus
                        chatImage
                        imageKey
                        lastOnlineAt
                        adminRightsId
                        publicKey
                        createdAt
                        updatedAt
                        owner
                      }
                      chatRoom {
                        id
                        chatRoomId
                        adminRightsId
                        name
                        image
                        newMessages
                        createdAt
                        updatedAt
                        chatRoomLastMessageId
                        owner
                      }
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  lastOnlineAt
                  adminRightsId
                  publicKey
                  createdAt
                  updatedAt
                  owner
                }
                chatRoom {
                  id
                  chatRoomId
                  adminRightsId
                  name
                  image
                  users {
                    items {
                      id
                      userId
                      chatRoomId
                      user {
                        id
                        username
                        phoneNumber
                        email
                        chatStatus
                        chatImage
                        imageKey
                        lastOnlineAt
                        adminRightsId
                        publicKey
                        createdAt
                        updatedAt
                        owner
                      }
                      chatRoom {
                        id
                        chatRoomId
                        adminRightsId
                        name
                        image
                        newMessages
                        createdAt
                        updatedAt
                        chatRoomLastMessageId
                        owner
                      }
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  chatMessages {
                    items {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  newMessages
                  lastMessage {
                    id
                    createdAt
                    type
                    text
                    userId
                    chatRoomId
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    status
                    replyToMessageID
                    forUserId
                    updatedAt
                    owner
                  }
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  owner
                }
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            lastOnlineAt
            adminRightsId
            publicKey
            createdAt
            updatedAt
            owner
          }
          chatRoom {
            id
            chatRoomId
            adminRightsId
            name
            image
            users {
              items {
                id
                userId
                chatRoomId
                user {
                  id
                  username
                  phoneNumber
                  numbers {
                    items {
                      number
                      createdAt
                      updatedAt
                      userNumbersId
                      owner
                    }
                    nextToken
                  }
                  email
                  chatStatus
                  chatImage
                  imageKey
                  chatMessages {
                    items {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  chatRooms {
                    items {
                      id
                      userId
                      chatRoomId
                      user {
                        id
                        username
                        phoneNumber
                        email
                        chatStatus
                        chatImage
                        imageKey
                        lastOnlineAt
                        adminRightsId
                        publicKey
                        createdAt
                        updatedAt
                        owner
                      }
                      chatRoom {
                        id
                        chatRoomId
                        adminRightsId
                        name
                        image
                        newMessages
                        createdAt
                        updatedAt
                        chatRoomLastMessageId
                        owner
                      }
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  lastOnlineAt
                  adminRightsId
                  publicKey
                  createdAt
                  updatedAt
                  owner
                }
                chatRoom {
                  id
                  chatRoomId
                  adminRightsId
                  name
                  image
                  users {
                    items {
                      id
                      userId
                      chatRoomId
                      user {
                        id
                        username
                        phoneNumber
                        email
                        chatStatus
                        chatImage
                        imageKey
                        lastOnlineAt
                        adminRightsId
                        publicKey
                        createdAt
                        updatedAt
                        owner
                      }
                      chatRoom {
                        id
                        chatRoomId
                        adminRightsId
                        name
                        image
                        newMessages
                        createdAt
                        updatedAt
                        chatRoomLastMessageId
                        owner
                      }
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  chatMessages {
                    items {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  newMessages
                  lastMessage {
                    id
                    createdAt
                    type
                    text
                    userId
                    chatRoomId
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    status
                    replyToMessageID
                    forUserId
                    updatedAt
                    owner
                  }
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  owner
                }
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            chatMessages {
              items {
                id
                createdAt
                type
                text
                userId
                chatRoomId
                chatAttachments {
                  items {
                    id
                    chatMessageID
                    chatRoomID
                    storageKey
                    type
                    width
                    height
                    duration
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                status
                replyToMessageID
                forUserId
                updatedAt
                owner
              }
              nextToken
            }
            newMessages
            lastMessage {
              id
              createdAt
              type
              text
              userId
              chatRoomId
              chatAttachments {
                items {
                  id
                  chatMessageID
                  chatRoomID
                  storageKey
                  type
                  width
                  height
                  duration
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              status
              replyToMessageID
              forUserId
              updatedAt
              owner
            }
            chatAttachments {
              items {
                id
                chatMessageID
                chatRoomID
                storageKey
                type
                width
                height
                duration
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
            owner
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      chatMessages {
        items {
          id
          createdAt
          type
          text
          userId
          chatRoomId
          chatAttachments {
            items {
              id
              chatMessageID
              chatRoomID
              storageKey
              type
              width
              height
              duration
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          status
          replyToMessageID
          forUserId
          updatedAt
          owner
        }
        nextToken
      }
      newMessages
      lastMessage {
        id
        createdAt
        type
        text
        userId
        chatRoomId
        chatAttachments {
          items {
            id
            chatMessageID
            chatRoomID
            storageKey
            type
            width
            height
            duration
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        status
        replyToMessageID
        forUserId
        updatedAt
        owner
      }
      chatAttachments {
        items {
          id
          chatMessageID
          chatRoomID
          storageKey
          type
          width
          height
          duration
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
      owner
    }
  }
`;
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
      id
      chatRoomId
      adminRightsId
      name
      image
      users {
        items {
          id
          userId
          chatRoomId
          user {
            id
            username
            phoneNumber
            numbers {
              items {
                number
                createdAt
                updatedAt
                userNumbersId
                owner
              }
              nextToken
            }
            email
            chatStatus
            chatImage
            imageKey
            chatMessages {
              items {
                id
                createdAt
                type
                text
                userId
                chatRoomId
                chatAttachments {
                  items {
                    id
                    chatMessageID
                    chatRoomID
                    storageKey
                    type
                    width
                    height
                    duration
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                status
                replyToMessageID
                forUserId
                updatedAt
                owner
              }
              nextToken
            }
            chatRooms {
              items {
                id
                userId
                chatRoomId
                user {
                  id
                  username
                  phoneNumber
                  numbers {
                    items {
                      number
                      createdAt
                      updatedAt
                      userNumbersId
                      owner
                    }
                    nextToken
                  }
                  email
                  chatStatus
                  chatImage
                  imageKey
                  chatMessages {
                    items {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  chatRooms {
                    items {
                      id
                      userId
                      chatRoomId
                      user {
                        id
                        username
                        phoneNumber
                        email
                        chatStatus
                        chatImage
                        imageKey
                        lastOnlineAt
                        adminRightsId
                        publicKey
                        createdAt
                        updatedAt
                        owner
                      }
                      chatRoom {
                        id
                        chatRoomId
                        adminRightsId
                        name
                        image
                        newMessages
                        createdAt
                        updatedAt
                        chatRoomLastMessageId
                        owner
                      }
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  lastOnlineAt
                  adminRightsId
                  publicKey
                  createdAt
                  updatedAt
                  owner
                }
                chatRoom {
                  id
                  chatRoomId
                  adminRightsId
                  name
                  image
                  users {
                    items {
                      id
                      userId
                      chatRoomId
                      user {
                        id
                        username
                        phoneNumber
                        email
                        chatStatus
                        chatImage
                        imageKey
                        lastOnlineAt
                        adminRightsId
                        publicKey
                        createdAt
                        updatedAt
                        owner
                      }
                      chatRoom {
                        id
                        chatRoomId
                        adminRightsId
                        name
                        image
                        newMessages
                        createdAt
                        updatedAt
                        chatRoomLastMessageId
                        owner
                      }
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  chatMessages {
                    items {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  newMessages
                  lastMessage {
                    id
                    createdAt
                    type
                    text
                    userId
                    chatRoomId
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    status
                    replyToMessageID
                    forUserId
                    updatedAt
                    owner
                  }
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  owner
                }
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            lastOnlineAt
            adminRightsId
            publicKey
            createdAt
            updatedAt
            owner
          }
          chatRoom {
            id
            chatRoomId
            adminRightsId
            name
            image
            users {
              items {
                id
                userId
                chatRoomId
                user {
                  id
                  username
                  phoneNumber
                  numbers {
                    items {
                      number
                      createdAt
                      updatedAt
                      userNumbersId
                      owner
                    }
                    nextToken
                  }
                  email
                  chatStatus
                  chatImage
                  imageKey
                  chatMessages {
                    items {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  chatRooms {
                    items {
                      id
                      userId
                      chatRoomId
                      user {
                        id
                        username
                        phoneNumber
                        email
                        chatStatus
                        chatImage
                        imageKey
                        lastOnlineAt
                        adminRightsId
                        publicKey
                        createdAt
                        updatedAt
                        owner
                      }
                      chatRoom {
                        id
                        chatRoomId
                        adminRightsId
                        name
                        image
                        newMessages
                        createdAt
                        updatedAt
                        chatRoomLastMessageId
                        owner
                      }
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  lastOnlineAt
                  adminRightsId
                  publicKey
                  createdAt
                  updatedAt
                  owner
                }
                chatRoom {
                  id
                  chatRoomId
                  adminRightsId
                  name
                  image
                  users {
                    items {
                      id
                      userId
                      chatRoomId
                      user {
                        id
                        username
                        phoneNumber
                        email
                        chatStatus
                        chatImage
                        imageKey
                        lastOnlineAt
                        adminRightsId
                        publicKey
                        createdAt
                        updatedAt
                        owner
                      }
                      chatRoom {
                        id
                        chatRoomId
                        adminRightsId
                        name
                        image
                        newMessages
                        createdAt
                        updatedAt
                        chatRoomLastMessageId
                        owner
                      }
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  chatMessages {
                    items {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  newMessages
                  lastMessage {
                    id
                    createdAt
                    type
                    text
                    userId
                    chatRoomId
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    status
                    replyToMessageID
                    forUserId
                    updatedAt
                    owner
                  }
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  createdAt
                  updatedAt
                  chatRoomLastMessageId
                  owner
                }
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            chatMessages {
              items {
                id
                createdAt
                type
                text
                userId
                chatRoomId
                chatAttachments {
                  items {
                    id
                    chatMessageID
                    chatRoomID
                    storageKey
                    type
                    width
                    height
                    duration
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                status
                replyToMessageID
                forUserId
                updatedAt
                owner
              }
              nextToken
            }
            newMessages
            lastMessage {
              id
              createdAt
              type
              text
              userId
              chatRoomId
              chatAttachments {
                items {
                  id
                  chatMessageID
                  chatRoomID
                  storageKey
                  type
                  width
                  height
                  duration
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              status
              replyToMessageID
              forUserId
              updatedAt
              owner
            }
            chatAttachments {
              items {
                id
                chatMessageID
                chatRoomID
                storageKey
                type
                width
                height
                duration
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
            owner
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      chatMessages {
        items {
          id
          createdAt
          type
          text
          userId
          chatRoomId
          chatAttachments {
            items {
              id
              chatMessageID
              chatRoomID
              storageKey
              type
              width
              height
              duration
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          status
          replyToMessageID
          forUserId
          updatedAt
          owner
        }
        nextToken
      }
      newMessages
      lastMessage {
        id
        createdAt
        type
        text
        userId
        chatRoomId
        chatAttachments {
          items {
            id
            chatMessageID
            chatRoomID
            storageKey
            type
            width
            height
            duration
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        status
        replyToMessageID
        forUserId
        updatedAt
        owner
      }
      chatAttachments {
        items {
          id
          chatMessageID
          chatRoomID
          storageKey
          type
          width
          height
          duration
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
      owner
    }
  }
`;
export const createChatRoomUsers = /* GraphQL */ `
  mutation CreateChatRoomUsers(
    $input: CreateChatRoomUsersInput!
    $condition: ModelChatRoomUsersConditionInput
  ) {
    createChatRoomUsers(input: $input, condition: $condition) {
      id
      userId
      chatRoomId
      user {
        id
        username
        phoneNumber
        numbers {
          items {
            number
            createdAt
            updatedAt
            userNumbersId
            owner
          }
          nextToken
        }
        email
        chatStatus
        chatImage
        imageKey
        chatMessages {
          items {
            id
            createdAt
            type
            text
            userId
            chatRoomId
            chatAttachments {
              items {
                id
                chatMessageID
                chatRoomID
                storageKey
                type
                width
                height
                duration
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            status
            replyToMessageID
            forUserId
            updatedAt
            owner
          }
          nextToken
        }
        chatRooms {
          items {
            id
            userId
            chatRoomId
            user {
              id
              username
              phoneNumber
              numbers {
                items {
                  number
                  createdAt
                  updatedAt
                  userNumbersId
                  owner
                }
                nextToken
              }
              email
              chatStatus
              chatImage
              imageKey
              chatMessages {
                items {
                  id
                  createdAt
                  type
                  text
                  userId
                  chatRoomId
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  status
                  replyToMessageID
                  forUserId
                  updatedAt
                  owner
                }
                nextToken
              }
              chatRooms {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    username
                    phoneNumber
                    numbers {
                      items {
                        number
                        createdAt
                        updatedAt
                        userNumbersId
                        owner
                      }
                      nextToken
                    }
                    email
                    chatStatus
                    chatImage
                    imageKey
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatRooms {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    lastOnlineAt
                    adminRightsId
                    publicKey
                    createdAt
                    updatedAt
                    owner
                  }
                  chatRoom {
                    id
                    chatRoomId
                    adminRightsId
                    name
                    image
                    users {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    newMessages
                    lastMessage {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    createdAt
                    updatedAt
                    chatRoomLastMessageId
                    owner
                  }
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              lastOnlineAt
              adminRightsId
              publicKey
              createdAt
              updatedAt
              owner
            }
            chatRoom {
              id
              chatRoomId
              adminRightsId
              name
              image
              users {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    username
                    phoneNumber
                    numbers {
                      items {
                        number
                        createdAt
                        updatedAt
                        userNumbersId
                        owner
                      }
                      nextToken
                    }
                    email
                    chatStatus
                    chatImage
                    imageKey
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatRooms {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    lastOnlineAt
                    adminRightsId
                    publicKey
                    createdAt
                    updatedAt
                    owner
                  }
                  chatRoom {
                    id
                    chatRoomId
                    adminRightsId
                    name
                    image
                    users {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    newMessages
                    lastMessage {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    createdAt
                    updatedAt
                    chatRoomLastMessageId
                    owner
                  }
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              chatMessages {
                items {
                  id
                  createdAt
                  type
                  text
                  userId
                  chatRoomId
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  status
                  replyToMessageID
                  forUserId
                  updatedAt
                  owner
                }
                nextToken
              }
              newMessages
              lastMessage {
                id
                createdAt
                type
                text
                userId
                chatRoomId
                chatAttachments {
                  items {
                    id
                    chatMessageID
                    chatRoomID
                    storageKey
                    type
                    width
                    height
                    duration
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                status
                replyToMessageID
                forUserId
                updatedAt
                owner
              }
              chatAttachments {
                items {
                  id
                  chatMessageID
                  chatRoomID
                  storageKey
                  type
                  width
                  height
                  duration
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              createdAt
              updatedAt
              chatRoomLastMessageId
              owner
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        lastOnlineAt
        adminRightsId
        publicKey
        createdAt
        updatedAt
        owner
      }
      chatRoom {
        id
        chatRoomId
        adminRightsId
        name
        image
        users {
          items {
            id
            userId
            chatRoomId
            user {
              id
              username
              phoneNumber
              numbers {
                items {
                  number
                  createdAt
                  updatedAt
                  userNumbersId
                  owner
                }
                nextToken
              }
              email
              chatStatus
              chatImage
              imageKey
              chatMessages {
                items {
                  id
                  createdAt
                  type
                  text
                  userId
                  chatRoomId
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  status
                  replyToMessageID
                  forUserId
                  updatedAt
                  owner
                }
                nextToken
              }
              chatRooms {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    username
                    phoneNumber
                    numbers {
                      items {
                        number
                        createdAt
                        updatedAt
                        userNumbersId
                        owner
                      }
                      nextToken
                    }
                    email
                    chatStatus
                    chatImage
                    imageKey
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatRooms {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    lastOnlineAt
                    adminRightsId
                    publicKey
                    createdAt
                    updatedAt
                    owner
                  }
                  chatRoom {
                    id
                    chatRoomId
                    adminRightsId
                    name
                    image
                    users {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    newMessages
                    lastMessage {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    createdAt
                    updatedAt
                    chatRoomLastMessageId
                    owner
                  }
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              lastOnlineAt
              adminRightsId
              publicKey
              createdAt
              updatedAt
              owner
            }
            chatRoom {
              id
              chatRoomId
              adminRightsId
              name
              image
              users {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    username
                    phoneNumber
                    numbers {
                      items {
                        number
                        createdAt
                        updatedAt
                        userNumbersId
                        owner
                      }
                      nextToken
                    }
                    email
                    chatStatus
                    chatImage
                    imageKey
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatRooms {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    lastOnlineAt
                    adminRightsId
                    publicKey
                    createdAt
                    updatedAt
                    owner
                  }
                  chatRoom {
                    id
                    chatRoomId
                    adminRightsId
                    name
                    image
                    users {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    newMessages
                    lastMessage {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    createdAt
                    updatedAt
                    chatRoomLastMessageId
                    owner
                  }
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              chatMessages {
                items {
                  id
                  createdAt
                  type
                  text
                  userId
                  chatRoomId
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  status
                  replyToMessageID
                  forUserId
                  updatedAt
                  owner
                }
                nextToken
              }
              newMessages
              lastMessage {
                id
                createdAt
                type
                text
                userId
                chatRoomId
                chatAttachments {
                  items {
                    id
                    chatMessageID
                    chatRoomID
                    storageKey
                    type
                    width
                    height
                    duration
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                status
                replyToMessageID
                forUserId
                updatedAt
                owner
              }
              chatAttachments {
                items {
                  id
                  chatMessageID
                  chatRoomID
                  storageKey
                  type
                  width
                  height
                  duration
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              createdAt
              updatedAt
              chatRoomLastMessageId
              owner
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        chatMessages {
          items {
            id
            createdAt
            type
            text
            userId
            chatRoomId
            chatAttachments {
              items {
                id
                chatMessageID
                chatRoomID
                storageKey
                type
                width
                height
                duration
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            status
            replyToMessageID
            forUserId
            updatedAt
            owner
          }
          nextToken
        }
        newMessages
        lastMessage {
          id
          createdAt
          type
          text
          userId
          chatRoomId
          chatAttachments {
            items {
              id
              chatMessageID
              chatRoomID
              storageKey
              type
              width
              height
              duration
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          status
          replyToMessageID
          forUserId
          updatedAt
          owner
        }
        chatAttachments {
          items {
            id
            chatMessageID
            chatRoomID
            storageKey
            type
            width
            height
            duration
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateChatRoomUsers = /* GraphQL */ `
  mutation UpdateChatRoomUsers(
    $input: UpdateChatRoomUsersInput!
    $condition: ModelChatRoomUsersConditionInput
  ) {
    updateChatRoomUsers(input: $input, condition: $condition) {
      id
      userId
      chatRoomId
      user {
        id
        username
        phoneNumber
        numbers {
          items {
            number
            createdAt
            updatedAt
            userNumbersId
            owner
          }
          nextToken
        }
        email
        chatStatus
        chatImage
        imageKey
        chatMessages {
          items {
            id
            createdAt
            type
            text
            userId
            chatRoomId
            chatAttachments {
              items {
                id
                chatMessageID
                chatRoomID
                storageKey
                type
                width
                height
                duration
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            status
            replyToMessageID
            forUserId
            updatedAt
            owner
          }
          nextToken
        }
        chatRooms {
          items {
            id
            userId
            chatRoomId
            user {
              id
              username
              phoneNumber
              numbers {
                items {
                  number
                  createdAt
                  updatedAt
                  userNumbersId
                  owner
                }
                nextToken
              }
              email
              chatStatus
              chatImage
              imageKey
              chatMessages {
                items {
                  id
                  createdAt
                  type
                  text
                  userId
                  chatRoomId
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  status
                  replyToMessageID
                  forUserId
                  updatedAt
                  owner
                }
                nextToken
              }
              chatRooms {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    username
                    phoneNumber
                    numbers {
                      items {
                        number
                        createdAt
                        updatedAt
                        userNumbersId
                        owner
                      }
                      nextToken
                    }
                    email
                    chatStatus
                    chatImage
                    imageKey
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatRooms {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    lastOnlineAt
                    adminRightsId
                    publicKey
                    createdAt
                    updatedAt
                    owner
                  }
                  chatRoom {
                    id
                    chatRoomId
                    adminRightsId
                    name
                    image
                    users {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    newMessages
                    lastMessage {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    createdAt
                    updatedAt
                    chatRoomLastMessageId
                    owner
                  }
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              lastOnlineAt
              adminRightsId
              publicKey
              createdAt
              updatedAt
              owner
            }
            chatRoom {
              id
              chatRoomId
              adminRightsId
              name
              image
              users {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    username
                    phoneNumber
                    numbers {
                      items {
                        number
                        createdAt
                        updatedAt
                        userNumbersId
                        owner
                      }
                      nextToken
                    }
                    email
                    chatStatus
                    chatImage
                    imageKey
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatRooms {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    lastOnlineAt
                    adminRightsId
                    publicKey
                    createdAt
                    updatedAt
                    owner
                  }
                  chatRoom {
                    id
                    chatRoomId
                    adminRightsId
                    name
                    image
                    users {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    newMessages
                    lastMessage {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    createdAt
                    updatedAt
                    chatRoomLastMessageId
                    owner
                  }
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              chatMessages {
                items {
                  id
                  createdAt
                  type
                  text
                  userId
                  chatRoomId
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  status
                  replyToMessageID
                  forUserId
                  updatedAt
                  owner
                }
                nextToken
              }
              newMessages
              lastMessage {
                id
                createdAt
                type
                text
                userId
                chatRoomId
                chatAttachments {
                  items {
                    id
                    chatMessageID
                    chatRoomID
                    storageKey
                    type
                    width
                    height
                    duration
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                status
                replyToMessageID
                forUserId
                updatedAt
                owner
              }
              chatAttachments {
                items {
                  id
                  chatMessageID
                  chatRoomID
                  storageKey
                  type
                  width
                  height
                  duration
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              createdAt
              updatedAt
              chatRoomLastMessageId
              owner
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        lastOnlineAt
        adminRightsId
        publicKey
        createdAt
        updatedAt
        owner
      }
      chatRoom {
        id
        chatRoomId
        adminRightsId
        name
        image
        users {
          items {
            id
            userId
            chatRoomId
            user {
              id
              username
              phoneNumber
              numbers {
                items {
                  number
                  createdAt
                  updatedAt
                  userNumbersId
                  owner
                }
                nextToken
              }
              email
              chatStatus
              chatImage
              imageKey
              chatMessages {
                items {
                  id
                  createdAt
                  type
                  text
                  userId
                  chatRoomId
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  status
                  replyToMessageID
                  forUserId
                  updatedAt
                  owner
                }
                nextToken
              }
              chatRooms {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    username
                    phoneNumber
                    numbers {
                      items {
                        number
                        createdAt
                        updatedAt
                        userNumbersId
                        owner
                      }
                      nextToken
                    }
                    email
                    chatStatus
                    chatImage
                    imageKey
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatRooms {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    lastOnlineAt
                    adminRightsId
                    publicKey
                    createdAt
                    updatedAt
                    owner
                  }
                  chatRoom {
                    id
                    chatRoomId
                    adminRightsId
                    name
                    image
                    users {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    newMessages
                    lastMessage {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    createdAt
                    updatedAt
                    chatRoomLastMessageId
                    owner
                  }
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              lastOnlineAt
              adminRightsId
              publicKey
              createdAt
              updatedAt
              owner
            }
            chatRoom {
              id
              chatRoomId
              adminRightsId
              name
              image
              users {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    username
                    phoneNumber
                    numbers {
                      items {
                        number
                        createdAt
                        updatedAt
                        userNumbersId
                        owner
                      }
                      nextToken
                    }
                    email
                    chatStatus
                    chatImage
                    imageKey
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatRooms {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    lastOnlineAt
                    adminRightsId
                    publicKey
                    createdAt
                    updatedAt
                    owner
                  }
                  chatRoom {
                    id
                    chatRoomId
                    adminRightsId
                    name
                    image
                    users {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    newMessages
                    lastMessage {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    createdAt
                    updatedAt
                    chatRoomLastMessageId
                    owner
                  }
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              chatMessages {
                items {
                  id
                  createdAt
                  type
                  text
                  userId
                  chatRoomId
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  status
                  replyToMessageID
                  forUserId
                  updatedAt
                  owner
                }
                nextToken
              }
              newMessages
              lastMessage {
                id
                createdAt
                type
                text
                userId
                chatRoomId
                chatAttachments {
                  items {
                    id
                    chatMessageID
                    chatRoomID
                    storageKey
                    type
                    width
                    height
                    duration
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                status
                replyToMessageID
                forUserId
                updatedAt
                owner
              }
              chatAttachments {
                items {
                  id
                  chatMessageID
                  chatRoomID
                  storageKey
                  type
                  width
                  height
                  duration
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              createdAt
              updatedAt
              chatRoomLastMessageId
              owner
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        chatMessages {
          items {
            id
            createdAt
            type
            text
            userId
            chatRoomId
            chatAttachments {
              items {
                id
                chatMessageID
                chatRoomID
                storageKey
                type
                width
                height
                duration
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            status
            replyToMessageID
            forUserId
            updatedAt
            owner
          }
          nextToken
        }
        newMessages
        lastMessage {
          id
          createdAt
          type
          text
          userId
          chatRoomId
          chatAttachments {
            items {
              id
              chatMessageID
              chatRoomID
              storageKey
              type
              width
              height
              duration
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          status
          replyToMessageID
          forUserId
          updatedAt
          owner
        }
        chatAttachments {
          items {
            id
            chatMessageID
            chatRoomID
            storageKey
            type
            width
            height
            duration
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteChatRoomUsers = /* GraphQL */ `
  mutation DeleteChatRoomUsers(
    $input: DeleteChatRoomUsersInput!
    $condition: ModelChatRoomUsersConditionInput
  ) {
    deleteChatRoomUsers(input: $input, condition: $condition) {
      id
      userId
      chatRoomId
      user {
        id
        username
        phoneNumber
        numbers {
          items {
            number
            createdAt
            updatedAt
            userNumbersId
            owner
          }
          nextToken
        }
        email
        chatStatus
        chatImage
        imageKey
        chatMessages {
          items {
            id
            createdAt
            type
            text
            userId
            chatRoomId
            chatAttachments {
              items {
                id
                chatMessageID
                chatRoomID
                storageKey
                type
                width
                height
                duration
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            status
            replyToMessageID
            forUserId
            updatedAt
            owner
          }
          nextToken
        }
        chatRooms {
          items {
            id
            userId
            chatRoomId
            user {
              id
              username
              phoneNumber
              numbers {
                items {
                  number
                  createdAt
                  updatedAt
                  userNumbersId
                  owner
                }
                nextToken
              }
              email
              chatStatus
              chatImage
              imageKey
              chatMessages {
                items {
                  id
                  createdAt
                  type
                  text
                  userId
                  chatRoomId
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  status
                  replyToMessageID
                  forUserId
                  updatedAt
                  owner
                }
                nextToken
              }
              chatRooms {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    username
                    phoneNumber
                    numbers {
                      items {
                        number
                        createdAt
                        updatedAt
                        userNumbersId
                        owner
                      }
                      nextToken
                    }
                    email
                    chatStatus
                    chatImage
                    imageKey
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatRooms {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    lastOnlineAt
                    adminRightsId
                    publicKey
                    createdAt
                    updatedAt
                    owner
                  }
                  chatRoom {
                    id
                    chatRoomId
                    adminRightsId
                    name
                    image
                    users {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    newMessages
                    lastMessage {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    createdAt
                    updatedAt
                    chatRoomLastMessageId
                    owner
                  }
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              lastOnlineAt
              adminRightsId
              publicKey
              createdAt
              updatedAt
              owner
            }
            chatRoom {
              id
              chatRoomId
              adminRightsId
              name
              image
              users {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    username
                    phoneNumber
                    numbers {
                      items {
                        number
                        createdAt
                        updatedAt
                        userNumbersId
                        owner
                      }
                      nextToken
                    }
                    email
                    chatStatus
                    chatImage
                    imageKey
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatRooms {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    lastOnlineAt
                    adminRightsId
                    publicKey
                    createdAt
                    updatedAt
                    owner
                  }
                  chatRoom {
                    id
                    chatRoomId
                    adminRightsId
                    name
                    image
                    users {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    newMessages
                    lastMessage {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    createdAt
                    updatedAt
                    chatRoomLastMessageId
                    owner
                  }
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              chatMessages {
                items {
                  id
                  createdAt
                  type
                  text
                  userId
                  chatRoomId
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  status
                  replyToMessageID
                  forUserId
                  updatedAt
                  owner
                }
                nextToken
              }
              newMessages
              lastMessage {
                id
                createdAt
                type
                text
                userId
                chatRoomId
                chatAttachments {
                  items {
                    id
                    chatMessageID
                    chatRoomID
                    storageKey
                    type
                    width
                    height
                    duration
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                status
                replyToMessageID
                forUserId
                updatedAt
                owner
              }
              chatAttachments {
                items {
                  id
                  chatMessageID
                  chatRoomID
                  storageKey
                  type
                  width
                  height
                  duration
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              createdAt
              updatedAt
              chatRoomLastMessageId
              owner
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        lastOnlineAt
        adminRightsId
        publicKey
        createdAt
        updatedAt
        owner
      }
      chatRoom {
        id
        chatRoomId
        adminRightsId
        name
        image
        users {
          items {
            id
            userId
            chatRoomId
            user {
              id
              username
              phoneNumber
              numbers {
                items {
                  number
                  createdAt
                  updatedAt
                  userNumbersId
                  owner
                }
                nextToken
              }
              email
              chatStatus
              chatImage
              imageKey
              chatMessages {
                items {
                  id
                  createdAt
                  type
                  text
                  userId
                  chatRoomId
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  status
                  replyToMessageID
                  forUserId
                  updatedAt
                  owner
                }
                nextToken
              }
              chatRooms {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    username
                    phoneNumber
                    numbers {
                      items {
                        number
                        createdAt
                        updatedAt
                        userNumbersId
                        owner
                      }
                      nextToken
                    }
                    email
                    chatStatus
                    chatImage
                    imageKey
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatRooms {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    lastOnlineAt
                    adminRightsId
                    publicKey
                    createdAt
                    updatedAt
                    owner
                  }
                  chatRoom {
                    id
                    chatRoomId
                    adminRightsId
                    name
                    image
                    users {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    newMessages
                    lastMessage {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    createdAt
                    updatedAt
                    chatRoomLastMessageId
                    owner
                  }
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              lastOnlineAt
              adminRightsId
              publicKey
              createdAt
              updatedAt
              owner
            }
            chatRoom {
              id
              chatRoomId
              adminRightsId
              name
              image
              users {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    username
                    phoneNumber
                    numbers {
                      items {
                        number
                        createdAt
                        updatedAt
                        userNumbersId
                        owner
                      }
                      nextToken
                    }
                    email
                    chatStatus
                    chatImage
                    imageKey
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatRooms {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    lastOnlineAt
                    adminRightsId
                    publicKey
                    createdAt
                    updatedAt
                    owner
                  }
                  chatRoom {
                    id
                    chatRoomId
                    adminRightsId
                    name
                    image
                    users {
                      items {
                        id
                        userId
                        chatRoomId
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    chatMessages {
                      items {
                        id
                        createdAt
                        type
                        text
                        userId
                        chatRoomId
                        status
                        replyToMessageID
                        forUserId
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    newMessages
                    lastMessage {
                      id
                      createdAt
                      type
                      text
                      userId
                      chatRoomId
                      chatAttachments {
                        nextToken
                      }
                      status
                      replyToMessageID
                      forUserId
                      updatedAt
                      owner
                    }
                    chatAttachments {
                      items {
                        id
                        chatMessageID
                        chatRoomID
                        storageKey
                        type
                        width
                        height
                        duration
                        createdAt
                        updatedAt
                        owner
                      }
                      nextToken
                    }
                    createdAt
                    updatedAt
                    chatRoomLastMessageId
                    owner
                  }
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              chatMessages {
                items {
                  id
                  createdAt
                  type
                  text
                  userId
                  chatRoomId
                  chatAttachments {
                    items {
                      id
                      chatMessageID
                      chatRoomID
                      storageKey
                      type
                      width
                      height
                      duration
                      createdAt
                      updatedAt
                      owner
                    }
                    nextToken
                  }
                  status
                  replyToMessageID
                  forUserId
                  updatedAt
                  owner
                }
                nextToken
              }
              newMessages
              lastMessage {
                id
                createdAt
                type
                text
                userId
                chatRoomId
                chatAttachments {
                  items {
                    id
                    chatMessageID
                    chatRoomID
                    storageKey
                    type
                    width
                    height
                    duration
                    createdAt
                    updatedAt
                    owner
                  }
                  nextToken
                }
                status
                replyToMessageID
                forUserId
                updatedAt
                owner
              }
              chatAttachments {
                items {
                  id
                  chatMessageID
                  chatRoomID
                  storageKey
                  type
                  width
                  height
                  duration
                  createdAt
                  updatedAt
                  owner
                }
                nextToken
              }
              createdAt
              updatedAt
              chatRoomLastMessageId
              owner
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        chatMessages {
          items {
            id
            createdAt
            type
            text
            userId
            chatRoomId
            chatAttachments {
              items {
                id
                chatMessageID
                chatRoomID
                storageKey
                type
                width
                height
                duration
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            status
            replyToMessageID
            forUserId
            updatedAt
            owner
          }
          nextToken
        }
        newMessages
        lastMessage {
          id
          createdAt
          type
          text
          userId
          chatRoomId
          chatAttachments {
            items {
              id
              chatMessageID
              chatRoomID
              storageKey
              type
              width
              height
              duration
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          status
          replyToMessageID
          forUserId
          updatedAt
          owner
        }
        chatAttachments {
          items {
            id
            chatMessageID
            chatRoomID
            storageKey
            type
            width
            height
            duration
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
