import React, { FunctionComponent, useState } from 'react';
import moment from 'moment';
import { Platform, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

enum Mode {
  date = "date",
  time = "time",
}

interface IPicker {
  updateDate: (value: string) => void;
  updateTime: (value: string) => void;
}

export const Picker: FunctionComponent<IPicker> = ({
  updateDate,
  updateTime,
}) => {
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState(Mode.date);
  const [show, setShow] = useState(false);

  const format = (value: Date, type: Mode): string => {
    const dateFormat = "MMMM DD YYYY";
    const timeFormat = "HH:mm";

    const selectedFormat = type === Mode.date ? dateFormat : timeFormat;

    return moment(value).format(selectedFormat);
  };

  const onChange = (event: any, selectedValue: Date | undefined): void => {
    setShow(Platform.OS === "ios");

    if (mode === Mode.date) {
      const currentDate = selectedValue || date;
      setDate(currentDate);
      updateDate(format(currentDate, Mode.date));
    } else {
      const currentTime = selectedValue || time;
      setTime(currentTime);
      updateTime(format(currentTime, Mode.time));
    }
  };

  const showMode = (currentMode: Mode): void => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = (): void => {
    showMode(Mode.date);
  };

  const showTimepicker = (): void => {
    showMode(Mode.time);
  };

  return (
    <View>
      <View style={styles.pickerContainer}>
        <View>
          <Text style={styles.pickerTitle}>
            Date
          </Text>
        </View>
        <TouchableOpacity
          style={styles.pickerTouchable}
          onPress={showDatepicker}
        >
          <Text style={styles.pickerText}>
            {format(date, Mode.date)}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.pickerContainer}>
        <View>
          <Text style={styles.pickerTitle}>
            Time
          </Text>
        </View>
        <TouchableOpacity
          style={styles.pickerTouchable}
          onPress={showTimepicker}
        >
          <Text style={styles.pickerText}>
            {format(time, Mode.time)}
          </Text>
        </TouchableOpacity>
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={mode === Mode.date ? date : time}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    marginTop: 10,
    marginLeft: 16,
    borderBottomWidth: .5,
    borderStyle: "solid",
    borderBottomColor: "#BBB",
  },
  pickerTitle: {
    color: "#666",
    fontSize: 16,
  },
  pickerTouchable: {
    height: 46,
    paddingBottom: 12,
    justifyContent: "flex-end",
  },
  pickerText: {
    fontSize: 16,
  }
});