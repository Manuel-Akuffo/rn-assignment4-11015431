import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Eric Atsu</Text>
          <Text style={styles.email}>eric@gmail.com</Text>
        </View>
        <Image style={styles.profileImage}  />
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search a job or position"
        />
        <TouchableOpacity style={styles.filterButton}>
          <Icon name="filter" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Featured Jobs</Text> 
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featuredJobs}>
        <View style={styles.featuredJobCard}>
          <Icon name="facebook" size={15} color="#fff" />
          <Text style={styles.jobTitle}>Software Engineer</Text>
          <Text style={styles.companyName}>Facebook</Text>
          <Text style={styles.salary}>$180,00</Text>
          <Text style={styles.location}>Accra, Ghana</Text>
        </View>
        <View style={styles.featuredJobCard1}>
          <Icon name="google" size={30} color="#fff" />
          <Text style={styles.jobTitle}>Product Manager</Text>
          <Text style={styles.companyName}>Google</Text>
          <Text style={styles.salary}>$160,00</Text>
          <Text style={styles.location}>California, US</Text>
        </View>
      </ScrollView>

      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      <View style={styles.popularJobs}>
        <View style={styles.popularJobCard}>
          <Icon name="briefcase" size={30} color="#ff0000" />
          <View style={styles.jobDetails}>
            <Text style={styles.jobTitle}>Jr Executive</Text>
            <Text style={styles.companyName}>Burger King</Text>
            <Text style={styles.salary}>$96,000/y</Text>
            <Text style={styles.location}>Los Angeles, US</Text>
          </View>
        </View>
      </View>

      <View style={styles.popularJobs}>
        <View style={styles.popularJobCard}>
          <Icon name="briefcase" size={30} color="yellow" />
          <View style={styles.jobDetails}>
            <Text style={styles.jobTitle}>Jr Executive</Text>
            <Text style={styles.companyName}>Burger King</Text>
            <Text style={styles.salary}>$96,000/y</Text>
            <Text style={styles.location}>Los Angeles, US</Text>
          </View>
        </View>
      </View>

      <View style={styles.popularJobs}>
        <View style={styles.popularJobCard}>
          <Icon name="briefcase" size={30} color="black" />
          <View style={styles.jobDetails}>
            <Text style={styles.jobTitle}>Jr Executive</Text>
            <Text style={styles.companyName}>Burger King</Text>
            <Text style={styles.salary}>$96,000/y</Text>
            <Text style={styles.location}>Los Angeles, US</Text>
          </View>
        </View>
      </View>
      
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  profileInfo: {
    flex: 1,
    top:7,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    top:7,
  },
  email: {
    fontSize: 16,
    color: '#aaa',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
  },
  filterButton: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  featuredJobs: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  featuredJobCard: {
    backgroundColor:'#4267B2',
    borderRadius: 10,
    padding: 20,
    marginRight: 10,
    width: 200,
    height: 150,
    justifyContent: 'space-between',
  },
  featuredJobCard1: {
    backgroundColor:'#00003B',
    borderRadius: 10,
    padding: 20,
    marginRight: 10,
    width: 200,
    height: 150,
    justifyContent: 'space-between',
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  companyName: {
    fontSize: 14,
    color: '#fff',
  },
  salary: {
    fontSize: 14,
    color: '#fff',
  },
  location: {
    fontSize: 12,
    color: '#fff',
  },
  popularJobs: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  popularJobCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
  },
  jobDetails: {
    marginLeft: 10,
  },
});

export default HomeScreen;
