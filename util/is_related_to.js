const isRelatedTo = (userId, currentUser) => {
  if (userId === currentUser.id) { return true }
  for (let i = 0; i < currentUser.relationships.length(); i++) { // relationship index
    let relationship = relationships[i]
    for (let j = 0; j < relationship.members.length(); j++) { // member index
      let member = relationship.members[j]
      if (member.id === userId) { return true }
    }
  }
  return false
}

module.exports = isRelatedTo;