if (this.state.actualPageId === 0) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <MainScreen changePage={this.changePage} />
    </SafeAreaView>
  );
} else if (this.state.actualPageId === 1) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <MenuScreen changePage={this.changePage} />
    </SafeAreaView>
  );
} else if (this.state.actualPageId === 2) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <SettingsScreen changePage={this.changePage} />
    </SafeAreaView>
  );
} else if (this.state.actualPageId === 3) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <AllMinorsScreen changePage={this.changePage} />
    </SafeAreaView>
  );
}
